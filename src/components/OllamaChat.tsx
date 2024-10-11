import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, AlertCircle } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const OllamaChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOllamaAvailable, setIsOllamaAvailable] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    checkOllamaAvailability();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const checkOllamaAvailability = async () => {
    try {
      const response = await fetch('http://localhost:11434/api/tags');
      if (!response.ok) {
        throw new Error('Ollama server is not responding');
      }
      setIsOllamaAvailable(true);
    } catch (error) {
      console.error('Ollama server is not available:', error);
      setIsOllamaAvailable(false);
      setError('Ollama server is not available. Chat functionality is limited.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    if (!isOllamaAvailable) {
      setTimeout(() => {
        const fallbackMessage: Message = { 
          role: 'assistant', 
          content: "I'm sorry, but I'm currently operating in fallback mode due to server unavailability. I can't provide specific answers right now, but I'm here to acknowledge your messages."
        };
        setMessages(prev => [...prev, fallbackMessage]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama2',
          messages: [...messages, userMessage],
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.message.content };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to get a response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md">
      <div className="flex-grow p-4 overflow-y-auto" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${
              message.role === 'user' ? 'bg-blue-100 text-blue-800' : 
              message.role === 'assistant' ? 'bg-gray-100 text-gray-800' :
              'bg-red-100 text-red-800'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <div className="inline-block p-2 rounded-lg bg-gray-100 text-gray-800">
              Thinking...
            </div>
          </div>
        )}
      </div>
      {error && (
        <div className="p-2 bg-red-100 text-red-700 flex items-center">
          <AlertCircle className="mr-2" size={16} />
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!isOllamaAvailable || isLoading}
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
            disabled={!isOllamaAvailable || isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default OllamaChat;
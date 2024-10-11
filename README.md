# HR Agent System (empowHR)

## Overview

The HR Agent System, named empowHR, is a cutting-edge, AI-powered full-stack web application designed to revolutionize HR operations across various industries. This system leverages advanced technologies to automate and enhance processes such as client screening, data collection, eligibility assessment, professional assignment, grant tracking, and Human Resource Information System (HRIS) integration. empowHR aims to streamline HR workflows, improve decision-making, and provide a comprehensive solution for modern HR departments.

## Key Features

1. **Interactive Dashboard**: 
   - Customizable layout with draggable and resizable panels
   - Real-time updates and data visualization
   - Comprehensive overview of HR metrics and activities

2. **AI-Powered Call Center**: 
   - Integration with Bland.ai for autonomous call handling and transcription
   - Real-time call monitoring and management
   - Automatic form filling based on call content
   - Seamless handoff to human agents when necessary

3. **Client Interaction**: 
   - Automated client intake process
   - Intelligent data collection and validation
   - Personalized client communication

4. **Professional Assignment**: 
   - AI-assisted matching of clients to professionals based on expertise and availability
   - Workload balancing and optimization
   - Performance tracking for assigned cases

5. **Grant Tracking**: 
   - Comprehensive management of grant applications and statuses
   - Automated deadline reminders and progress tracking
   - Data-driven insights for grant success rates

6. **HRIS Integration**: 
   - Centralized employee directory and management system
   - Seamless integration with existing HR databases
   - Automated employee onboarding and offboarding processes

7. **Performance Tracking**: 
   - AI-driven analysis of employee performance metrics
   - Customizable KPIs and goal setting
   - Automated performance review scheduling and documentation

8. **Time-Off Management**: 
   - Streamlined request and approval process for time-off
   - Calendar integration and conflict resolution
   - Analytics on time-off patterns and impact on productivity

9. **Advanced Reporting**: 
   - AI-generated insights and recommendations
   - Customizable report templates
   - Export options in various formats (PDF, CSV, etc.)

10. **Node Graph Visualization**: 
    - Interactive 3D graph showing relationships between entities (employees, departments, projects, etc.)
    - Dynamic filtering and exploration of organizational structure
    - Visual representation of data flows and dependencies

11. **AI Assistant**: 
    - On-demand Ollama LLM interface for chat and agentic tools
    - Natural language processing for complex HR queries
    - Integration with GraphRAG for enhanced question-answering capabilities

12. **Vector Database**: 
    - Efficient storage and retrieval of information for AI agents and chat
    - Semantic search capabilities for quick access to relevant data
    - Continuous learning and knowledge base expansion

13. **Weather Widget**: 
    - Real-time weather updates and forecasts
    - Integration with time-off management for weather-related planning

14. **Smart Notifications**: 
    - AI-prioritized system notifications
    - Personalized alerts based on user role and preferences
    - Multi-channel notification delivery (email, SMS, in-app)

15. **Intelligent Task Management**: 
    - AI-assisted task tracking and prioritization
    - Automated task assignment based on workload and expertise
    - Progress monitoring and deadline management

## Technology Stack

### Frontend
- **Framework**: React with TypeScript
- **State Management**: React Hooks
- **Styling**: Tailwind CSS for responsive and customizable UI
- **Icons**: Lucide React for consistent and scalable iconography
- **Layouts**: React Grid Layout for flexible dashboard arrangements
- **3D Visualization**: Three.js and React Force Graph 3D for interactive node graphs
- **Drag and Drop**: React DnD for intuitive user interactions
- **Charts and Data Visualization**: D3.js for complex data representations

### Backend
- **Runtime**: Node.js
- **API**: Express.js for RESTful endpoints
- **Database**: PostgreSQL for relational data storage
- **ORM**: Prisma for type-safe database queries and migrations

### AI and Machine Learning
- **Conversational AI**: Bland.ai for natural language processing and autonomous call handling
- **Local Language Model**: Ollama for on-premise AI capabilities
- **AI Orchestration**: LangChain for building and managing AI agents and workflows
- **Advanced Question-Answering**: GraphRAG (Retrieval Augmented Generation with Knowledge Graphs) for context-aware responses
- **Vector Database**: Pinecone or Weaviate for efficient similarity search and information retrieval
- **Graph Database**: Neo4j for modeling complex relationships and hierarchies

### DevOps and Deployment
- **Version Control**: Git and GitHub for collaborative development
- **Containerization**: Docker for consistent development and deployment environments
- **CI/CD**: GitHub Actions for automated testing and deployment pipelines
- **Hosting**: AWS or Google Cloud Platform for scalable cloud infrastructure

### Testing and Quality Assurance
- **Unit Testing**: Jest for JavaScript and TypeScript tests
- **End-to-End Testing**: Cypress for comprehensive UI testing
- **Performance Testing**: Lighthouse for web performance optimization

## AI Integration Details

### Bland.ai
Bland.ai is integrated into the call center module to provide autonomous call handling, transcription, and form filling capabilities. It uses advanced natural language processing to understand client queries, extract relevant information, and provide appropriate responses. The system can handle routine inquiries, schedule appointments, and escalate complex issues to human agents when necessary.

### Ollama LLM
Ollama is an open-source, locally-run language model that powers the on-demand chat interface and provides AI capabilities across the application. It offers several advantages:
- **Privacy**: All data processing occurs on-premise, ensuring sensitive HR information remains secure.
- **Customization**: The model can be fine-tuned on company-specific data for more accurate and relevant responses.
- **Low Latency**: Local deployment ensures quick response times for real-time interactions.
- **Offline Capability**: The system can function without an internet connection, enhancing reliability.

### LangChain
LangChain is used to build and orchestrate AI agents and workflows throughout the application. It provides a framework for:
- **Prompt Management**: Efficiently design and manage prompts for various AI tasks.
- **Memory**: Implement conversational memory for context-aware interactions.
- **Chains**: Create sequences of operations for complex AI-driven processes.
- **Agents**: Develop autonomous agents that can make decisions and take actions based on input and context.

### GraphRAG
GraphRAG enhances the question-answering capabilities of the AI assistant by combining the power of large language models with structured knowledge graphs. This approach offers several benefits:
- **Context-Aware Responses**: Utilize the relationships and hierarchies in the knowledge graph to provide more accurate and relevant answers.
- **Explainable AI**: Trace the reasoning process through the graph structure, enhancing transparency in decision-making.
- **Dynamic Knowledge Integration**: Easily update and expand the knowledge base by modifying the graph structure.

### Vector Database
The vector database (e.g., Pinecone or Weaviate) is used to efficiently store and retrieve high-dimensional vector representations of text data. This enables:
- **Semantic Search**: Find relevant information based on meaning rather than exact keyword matches.
- **Recommendation Systems**: Suggest relevant policies, training materials, or resources based on context.
- **Anomaly Detection**: Identify unusual patterns in HR data for fraud prevention or process optimization.

## Project Structure

```
hr-agent-system/
├── src/
│   ├── components/
│   │   ├── DraggableWindow.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── NodeGraph.tsx
│   │   ├── NotificationsWidget.tsx
│   │   ├── OllamaChat.tsx
│   │   ├── Panel.tsx
│   │   ├── TasksWidget.tsx
│   │   └── WeatherWidget.tsx
│   ├── pages/
│   │   ├── CallCenter.tsx
│   │   ├── ClientInteraction.tsx
│   │   ├── Dashboard.tsx
│   │   ├── GrantTracking.tsx
│   │   ├── HRISIntegration.tsx
│   │   ├── PerformanceTracking.tsx
│   │   ├── ProfessionalAssignment.tsx
│   │   ├── Reporting.tsx
│   │   └── TimeOffManagement.tsx
│   ├── services/
│   │   ├── blandAI.ts
│   │   ├── ollamaLLM.ts
│   │   ├── graphRAG.ts
│   │   ├── vectorDB.ts
│   │   └── langchainAgents.ts
│   ├── utils/
│   │   ├── apiHelpers.ts
│   │   ├── dateUtils.ts
│   │   └── formatters.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useNotifications.ts
│   │   └── useTheme.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── types/
│   │   ├── employee.ts
│   │   ├── client.ts
│   │   └── case.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.ts
├── prisma/
│   └── schema.prisma
├── public/
│   ├── images/
│   └── fonts/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── API.md
│   ├── CONTRIBUTING.md
│   └── DEPLOYMENT.md
├── scripts/
│   ├── seed.ts
│   └── backup.sh
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── .eslintrc.js
├── .prettierrc
├── .env.example
└── README.md
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/hr-agent-system.git
   cd hr-agent-system
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add necessary API keys and configurations for Bland.ai, Ollama, and vector database

4. Initialize the database:
   ```
   npx prisma migrate dev
   npx prisma db seed
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Deployment

For detailed deployment instructions, please refer to the [DEPLOYMENT.md](docs/DEPLOYMENT.md) file in the docs directory.

## Contributing

We welcome contributions to the HR Agent System! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

For more detailed information on contributing, please read our [CONTRIBUTING.md](docs/CONTRIBUTING.md) guide.

## Future Enhancements

1. Implement advanced AI-driven predictive analytics for HR trends and employee churn prediction.
2. Enhance the node graph visualizer with real-time data updates and interactive filtering options.
3. Develop a mobile app version for on-the-go HR management and employee self-service.
4. Integrate with blockchain technology for secure and transparent record-keeping of sensitive HR data.
5. Implement multi-language support using AI-powered translation for global HR operations.
6. Develop an AI-driven employee matching system for internal job postings and career development.
7. Create an AI-powered resume screening and initial interview system to streamline recruitment.
8. Implement sentiment analysis on employee feedback and communications for proactive issue resolution.
9. Integrate with IoT devices for smart office management and employee well-being monitoring.
10. Develop a virtual reality (VR) module for immersive training and onboarding experiences.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For any queries, suggestions, or support needs, please contact:

- Project Lead: Jacob Ramirez (californias66@proton.me)
- Support Team: Apophis Management (apophismanagement@gmail.com)

---

empowHR is committed to revolutionizing HR management through cutting-edge AI technology and user-centric design. We continuously strive to improve and expand our system to meet the evolving needs of modern HR departments.
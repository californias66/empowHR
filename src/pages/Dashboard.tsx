import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Panel from '../components/Panel';
import NodeGraph from '../components/NodeGraph';
import OllamaChat from '../components/OllamaChat';
import WeatherWidget from '../components/WeatherWidget';
import NotificationsWidget from '../components/NotificationsWidget';
import TasksWidget from '../components/TasksWidget';
import { Users, Briefcase, FileText, Database, TrendingUp, Clock, BarChart, Phone, Network, MessageSquare, Cloud, Bell, CheckSquare, DollarSign, UserPlus, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const ResponsiveGridLayout = WidthProvider(Responsive);

// Mock data for charts
const employeeData = [
  { name: 'Jan', Hires: 14, Departures: 8 },
  { name: 'Feb', Hires: 18, Departures: 6 },
  { name: 'Mar', Hires: 25, Departures: 10 },
  { name: 'Apr', Hires: 12, Departures: 7 },
  { name: 'May', Hires: 30, Departures: 15 },
  { name: 'Jun', Hires: 22, Departures: 9 },
];

const grantData = [
  { name: 'Applied', value: 15 },
  { name: 'Approved', value: 8 },
  { name: 'Pending', value: 5 },
  { name: 'Rejected', value: 2 },
];

const callData = [
  { time: '00:00', calls: 320 },
  { time: '04:00', calls: 180 },
  { time: '08:00', calls: 550 },
  { time: '12:00', calls: 780 },
  { time: '16:00', calls: 690 },
  { time: '20:00', calls: 420 },
];

const COLORS = ['#00FFFF', '#FF00FF', '#FFFF00', '#FF8042'];

const Dashboard: React.FC = () => {
  const [layout, setLayout] = useState([
    { i: 'employeeOverview', x: 0, y: 0, w: 2, h: 2 },
    { i: 'recruitmentMetrics', x: 2, y: 0, w: 2, h: 2 },
    { i: 'performanceSnapshot', x: 4, y: 0, w: 2, h: 2 },
    { i: 'compensationSummary', x: 6, y: 0, w: 2, h: 2 },
    { i: 'learningDevelopment', x: 0, y: 2, w: 2, h: 2 },
    { i: 'employeeEngagement', x: 2, y: 2, w: 2, h: 2 },
    { i: 'diversityInclusion', x: 4, y: 2, w: 2, h: 2 },
    { i: 'complianceTracker', x: 6, y: 2, w: 2, h: 2 },
    { i: 'nodeGraph', x: 0, y: 4, w: 4, h: 3 },
    { i: 'ollamaChat', x: 4, y: 4, w: 4, h: 3 },
    { i: 'weather', x: 8, y: 0, w: 2, h: 2 },
    { i: 'notifications', x: 8, y: 2, w: 2, h: 2 },
    { i: 'tasks', x: 8, y: 4, w: 2, h: 2 },
  ]);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const onLayoutChange = (newLayout: any) => {
    setLayout(newLayout);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      {/* Collapsible Sidebar */}
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-48'} bg-black bg-opacity-50 backdrop-blur-lg transition-all duration-300 ease-in-out p-4`}>
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-2xl font-bold ${isSidebarCollapsed ? 'hidden' : 'block'}`}>
            empowHR
          </h1>
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-white hover:text-cyan-400 transition-colors">
            {isSidebarCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </button>
        </div>
        <nav className="space-y-2">
          <button className="w-full text-left py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
            <Users className="mr-2 h-5 w-5" />
            {!isSidebarCollapsed && <span>Dashboard</span>}
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
            <Briefcase className="mr-2 h-5 w-5" />
            {!isSidebarCollapsed && <span>Jobs</span>}
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            {!isSidebarCollapsed && <span>Applications</span>}
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            {!isSidebarCollapsed && <span>Messages</span>}
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          HR Command Center
        </h2>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 10, md: 8, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
          onLayoutChange={onLayoutChange}
          isDraggable
          isResizable
          margin={[12, 12]}
        >
          <Panel key="employeeOverview" title="Employee Overview" color="from-cyan-500 to-blue-600" icon={<Users />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Total Employees: 1,234</h3>
              <p className="text-sm mb-4">+5% from last month</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <h4 className="font-semibold">New Hires</h4>
                  <p className="text-xl">45</p>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-lg">
                  <h4 className="font-semibold">Turnover Rate</h4>
                  <p className="text-xl">3.2%</p>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="recruitmentMetrics" title="Recruitment Metrics" color="from-purple-500 to-pink-600" icon={<UserPlus />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Open Positions: 23</h3>
              <p className="text-sm mb-4">-2 from last week</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Applications Received</span>
                  <span>187</span>
                </div>
                <div className="flex justify-between">
                  <span>Interviews Scheduled</span>
                  <span>42</span>
                </div>
                <div className="flex justify-between">
                  <span>Offers Extended</span>
                  <span>8</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="performanceSnapshot" title="Performance Snapshot" color="from-yellow-400 to-orange-600" icon={<TrendingUp />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Average Performance Score</h3>
              <p className="text-3xl font-bold mb-4">8.7 / 10</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Top Performers</span>
                  <span className="text-green-400">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Needs Improvement</span>
                  <span className="text-red-400">8%</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="compensationSummary" title="Compensation Summary" color="from-green-400 to-teal-600" icon={<DollarSign />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Total Payroll</h3>
              <p className="text-3xl font-bold mb-4">$1,234,567</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Avg. Salary</span>
                  <span>$75,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Bonus Payout</span>
                  <span>$250,000</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="learningDevelopment" title="Learning & Development" color="from-indigo-400 to-purple-600" icon={<Briefcase />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Training Programs</h3>
              <p className="text-3xl font-bold mb-4">12 Active</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Employees Enrolled</span>
                  <span>324</span>
                </div>
                <div className="flex justify-between">
                  <span>Completion Rate</span>
                  <span>78%</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="employeeEngagement" title="Employee Engagement" color="from-pink-400 to-red-600" icon={<Zap />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Engagement Score</h3>
              <p className="text-3xl font-bold mb-4">4.2 / 5</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Survey Participation</span>
                  <span>89%</span>
                </div>
                <div className="flex justify-between">
                  <span>eNPS</span>
                  <span>+42</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="diversityInclusion" title="Diversity & Inclusion" color="from-blue-400 to-indigo-600" icon={<Users />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Diversity Index</h3>
              <p className="text-3xl font-bold mb-4">0.78</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Gender Ratio (F:M)</span>
                  <span>45:55</span>
                </div>
                <div className="flex justify-between">
                  <span>Ethnic Diversity</span>
                  <span>72%</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="complianceTracker" title="Compliance Tracker" color="from-red-400 to-orange-600" icon={<FileText />}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Compliance Rate</h3>
              <p className="text-3xl font-bold mb-4">98.5%</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Open Issues</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between">
                  <span>Resolved This Month</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </Panel>
          <Panel key="nodeGraph" title="Organization Structure" color="from-green-400 to-teal-600" icon={<Network />}>
            <NodeGraph />
          </Panel>
          <Panel key="ollamaChat" title="AI Assistant" color="from-purple-400 to-pink-600" icon={<MessageSquare />}>
            <OllamaChat />
          </Panel>
          <Panel key="weather" title="Weather" color="from-blue-400 to-cyan-600" icon={<Cloud />}>
            <WeatherWidget />
          </Panel>
          <Panel key="notifications" title="Notifications" color="from-yellow-400 to-amber-600" icon={<Bell />}>
            <NotificationsWidget />
          </Panel>
          <Panel key="tasks" title="Tasks" color="from-emerald-400 to-green-600" icon={<CheckSquare />}>
            <TasksWidget />
          </Panel>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
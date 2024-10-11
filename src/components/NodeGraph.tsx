import React, { useRef, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import * as d3 from 'd3';

const NodeGraph: React.FC = () => {
  const fgRef = useRef<any>();

  const data = {
    nodes: [
      // Executive Leadership
      { id: 'CEO', group: 1, name: 'John Doe', role: 'Chief Executive Officer', department: 'Executive', val: 30 },
      { id: 'CTO', group: 2, name: 'Jane Smith', role: 'Chief Technology Officer', department: 'Technology', val: 25 },
      { id: 'CFO', group: 2, name: 'Mike Johnson', role: 'Chief Financial Officer', department: 'Finance', val: 25 },
      { id: 'COO', group: 2, name: 'Sarah Brown', role: 'Chief Operating Officer', department: 'Operations', val: 25 },
      { id: 'CMO', group: 2, name: 'David Lee', role: 'Chief Marketing Officer', department: 'Marketing', val: 25 },
      { id: 'CHRO', group: 2, name: 'Emily Chen', role: 'Chief Human Resources Officer', department: 'Human Resources', val: 25 },

      // Technology Department
      { id: 'HeadEng', group: 3, name: 'Alex Wong', role: 'Head of Engineering', department: 'Technology', val: 20 },
      { id: 'HeadProd', group: 3, name: 'Lisa Park', role: 'Head of Product', department: 'Technology', val: 20 },
      { id: 'HeadData', group: 3, name: 'Tom Wilson', role: 'Head of Data Science', department: 'Technology', val: 20 },
      { id: 'SeniorDev1', group: 4, name: 'Ryan Garcia', role: 'Senior Developer', department: 'Technology', val: 15 },
      { id: 'SeniorDev2', group: 4, name: 'Emma Davis', role: 'Senior Developer', department: 'Technology', val: 15 },
      { id: 'JuniorDev1', group: 4, name: 'Olivia Johnson', role: 'Junior Developer', department: 'Technology', val: 10 },
      { id: 'JuniorDev2', group: 4, name: 'Ethan Brown', role: 'Junior Developer', department: 'Technology', val: 10 },
      { id: 'ProductManager1', group: 4, name: 'Sophia Lee', role: 'Product Manager', department: 'Technology', val: 15 },
      { id: 'DataScientist1', group: 4, name: 'Daniel Kim', role: 'Data Scientist', department: 'Technology', val: 15 },

      // Finance Department
      { id: 'FinanceManager', group: 3, name: 'Rachel Green', role: 'Finance Manager', department: 'Finance', val: 20 },
      { id: 'Accountant1', group: 4, name: 'Chris Evans', role: 'Senior Accountant', department: 'Finance', val: 15 },
      { id: 'Accountant2', group: 4, name: 'Mia Wallace', role: 'Junior Accountant', department: 'Finance', val: 10 },
      { id: 'FinancialAnalyst', group: 4, name: 'Leo DiCaprio', role: 'Financial Analyst', department: 'Finance', val: 15 },

      // Operations Department
      { id: 'OpsManager', group: 3, name: 'Kate Winslet', role: 'Operations Manager', department: 'Operations', val: 20 },
      { id: 'ProjectManager1', group: 4, name: 'Brad Pitt', role: 'Project Manager', department: 'Operations', val: 15 },
      { id: 'ProjectManager2', group: 4, name: 'Angelina Jolie', role: 'Project Manager', department: 'Operations', val: 15 },
      { id: 'OperationsAnalyst', group: 4, name: 'Tom Hanks', role: 'Operations Analyst', department: 'Operations', val: 15 },

      // Marketing Department
      { id: 'MarketingManager', group: 3, name: 'Julia Roberts', role: 'Marketing Manager', department: 'Marketing', val: 20 },
      { id: 'ContentSpecialist', group: 4, name: 'Hugh Grant', role: 'Content Specialist', department: 'Marketing', val: 15 },
      { id: 'SocialMediaManager', group: 4, name: 'Sandra Bullock', role: 'Social Media Manager', department: 'Marketing', val: 15 },
      { id: 'GraphicDesigner', group: 4, name: 'Ryan Reynolds', role: 'Graphic Designer', department: 'Marketing', val: 15 },

      // Human Resources Department
      { id: 'HRManager', group: 3, name: 'Meryl Streep', role: 'HR Manager', department: 'Human Resources', val: 20 },
      { id: 'Recruiter1', group: 4, name: 'Robert De Niro', role: 'Senior Recruiter', department: 'Human Resources', val: 15 },
      { id: 'Recruiter2', group: 4, name: 'Al Pacino', role: 'Junior Recruiter', department: 'Human Resources', val: 10 },
      { id: 'TrainingSpecialist', group: 4, name: 'Cate Blanchett', role: 'Training Specialist', department: 'Human Resources', val: 15 },
    ],
    links: [
      // CEO connections
      { source: 'CEO', target: 'CTO' },
      { source: 'CEO', target: 'CFO' },
      { source: 'CEO', target: 'COO' },
      { source: 'CEO', target: 'CMO' },
      { source: 'CEO', target: 'CHRO' },

      // CTO connections
      { source: 'CTO', target: 'HeadEng' },
      { source: 'CTO', target: 'HeadProd' },
      { source: 'CTO', target: 'HeadData' },
      { source: 'HeadEng', target: 'SeniorDev1' },
      { source: 'HeadEng', target: 'SeniorDev2' },
      { source: 'HeadEng', target: 'JuniorDev1' },
      { source: 'HeadEng', target: 'JuniorDev2' },
      { source: 'HeadProd', target: 'ProductManager1' },
      { source: 'HeadData', target: 'DataScientist1' },

      // CFO connections
      { source: 'CFO', target: 'FinanceManager' },
      { source: 'FinanceManager', target: 'Accountant1' },
      { source: 'FinanceManager', target: 'Accountant2' },
      { source: 'FinanceManager', target: 'FinancialAnalyst' },

      // COO connections
      { source: 'COO', target: 'OpsManager' },
      { source: 'OpsManager', target: 'ProjectManager1' },
      { source: 'OpsManager', target: 'ProjectManager2' },
      { source: 'OpsManager', target: 'OperationsAnalyst' },

      // CMO connections
      { source: 'CMO', target: 'MarketingManager' },
      { source: 'MarketingManager', target: 'ContentSpecialist' },
      { source: 'MarketingManager', target: 'SocialMediaManager' },
      { source: 'MarketingManager', target: 'GraphicDesigner' },

      // CHRO connections
      { source: 'CHRO', target: 'HRManager' },
      { source: 'HRManager', target: 'Recruiter1' },
      { source: 'HRManager', target: 'Recruiter2' },
      { source: 'HRManager', target: 'TrainingSpecialist' },

      // Cross-department connections
      { source: 'HeadProd', target: 'ProjectManager1' },
      { source: 'DataScientist1', target: 'MarketingManager' },
      { source: 'FinancialAnalyst', target: 'OpsManager' },
      { source: 'Recruiter1', target: 'HeadEng' },
      { source: 'ContentSpecialist', target: 'ProductManager1' },
    ],
  };

  useEffect(() => {
    const fg = fgRef.current;

    if (fg) {
      // add collision force
      fg.d3Force('collision', d3.forceCollide((node: any) => Math.sqrt(node.val) * 2));

      // add curved lines
      fg.d3Force('link').distance((link: any) => link.distance || 100);

      // add bloom effect
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      );
      bloomPass.threshold = 0;
      bloomPass.strength = 0.75;
      bloomPass.radius = 0;
      fg.postProcessingComposer().addPass(bloomPass);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        nodeLabel={(node: any) => `${node.name} - ${node.role}`}
        nodeColor={(node: any) => {
          switch (node.department) {
            case 'Executive': return '#FF6B6B';
            case 'Technology': return '#4ECDC4';
            case 'Finance': return '#45B7D1';
            case 'Operations': return '#FFA07A';
            case 'Marketing': return '#C3B1E1';
            case 'Human Resources': return '#F7DC6F';
            default: return '#CCCCCC';
          }
        }}
        nodeVal="val"
        linkColor={() => '#ffffff33'}
        linkWidth={1}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.005}
        backgroundColor="#00000000"
      />
    </div>
  );
};

export default NodeGraph;
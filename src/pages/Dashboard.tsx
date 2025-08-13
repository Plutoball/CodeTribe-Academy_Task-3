// This page will display the dashboard with all job applications and their statuses.
// Its can also list companies, job titles, and other relevant information.

import { useEffect, useState} from 'react';
import { loadApplications } from '../utils/storage';
import  type { JobApplication } from '../types/JobApply';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import Overview from '../components/Overview';
import ApplicationList from '../components/AppliList';
import './dashboard.css'; //Dashboard CSS file for styling


function Dashboard() {
    const [applications, setApplications] = useState<JobApplication[]>([]);
    useEffect(() => {
        const data = loadApplications();
        setApplications(data);
    }, []);

  return (
    
    <div className="dashboard">
      <SideBar/>
      <TopNav
        theme='dark'
        useFullLogo={false}
        links={[
          {label: 'Jobs', href:'/jobs'},
          {label: 'Career', href:'/career'},
          {label: 'Advice', href:'/advice'},
        ]}
      />

      <div className="content">
        {/** Main content of the dashboard */}
      <h3>Dashboard</h3>
      <h2>Welcome - Name</h2>
      <p>Here's whats happening with your job search today...</p>
      {/* Additional components for displaying job applications. */}
        <Overview applications = {applications} />
        <ApplicationList applications={applications}/>
      </div>

    </div>
  );
}

export default Dashboard;
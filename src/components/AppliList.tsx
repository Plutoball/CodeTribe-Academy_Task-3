//This component will contain a table linsting all the job enteries and their statuses.
// At the top will be a searh and filter bar, and a button to add a new entry.
// Users will be able to view & update the entry by clicking on it to view a saved form.
// Users can delete a record/ enrty on this table.

import { useState} from 'react';
import type { JobApplication } from '../types/JobApply';
import { MdDelete, MdSearch } from 'react-icons/md';
import './AppliList.css';

interface Props {
    applications: JobApplication[];
}

function ApplicationList({ applications }: Props) {
    {/*Search logic*/}
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState ('');

    const filteredApps = applications.filter(
        app => {
            const matchSearch = 
             app.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
             app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
             app.title.toLowerCase().includes(searchTerm.toLowerCase());

            const matchStatus = statusFilter === '' || app.status === statusFilter;
            
            return matchSearch && matchStatus;
        });

    function handleDelete(id: string){
        // logoc to remove record /row from localStorage
        console.log("Delete", id);
    }
        
    {/*Interface output set up*/}
    return (
        <div className = "table">
            <div className = "table-header">
                <h2>Recent Activity</h2>

                <div className ="search-ctrl">

                    <div className = "search-bar">
                        <input type = "text" placeholder="Search by title..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        <button type ="submit">
                            <MdSearch/>
                        </button>
                    </div>

                    <div className = "search-filter">
                        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                            <option value="">All</option>
                            <option value="new">New</option>
                            <option value="inreview">In Review</option>
                            <option value="offered">Offered</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                <button>
                    <a href="/AppliForm">Add New</a>
                </button>
            </div>
            
            {/* Result = filtered table*/}

            <table>
                <thead>
                    {/*Table columns*/}
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Ref-Number</th>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Date Applied</th>
                        <th>Status</th>
                        <th>Link</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Table Rows */}
                    {filteredApps.map(app => (
                        <tr key={app.id}>
                            <td>{app.title}</td>
                            <td>{app.refNumber}</td>
                            <td>{app.position}</td>
                            <td>{app.companyName}</td>
                            <td>{new Date(app.dateApplied).toLocaleDateString()}</td>
                            <td>{app.status}</td>
                            <td><a href= {new URL (app.link).toString()} target='_blank' rel="noopener noreferrer">View</a></td>
                            <td>
                                <button onClick={() => handleDelete(app.id)} className="deleteIcon"><MdDelete/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;

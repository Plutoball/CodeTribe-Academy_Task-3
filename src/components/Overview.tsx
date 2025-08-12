// This component will sit in the main dashboard.
//It contains 4 cards showing the foolowing:
// 1. Total number of jobs applied per month.
// 2. Total number of offers recieved per month.
// 3. Total number of applications in review(befor or after interview).
// 4. Total number o rejections.

import type { JobApplication } from '../types/JobApply';
import './Overview.css'
interface Props {
    applications :JobApplication[];
}

function Overview({ applications}: Props){

    const total = applications.length;
    const offered = applications.filter(app =>app.status==='offered').length;
    const inReview = applications.filter(app =>app.status==='in review').length;
    const rejected = applications.filter(app =>app.status==='rejected').length;


    return(
        <div className = "grid-container">
            <div className = "total-card">
                <h4>Total jobs</h4>
                <p>{total}</p>{/*contains running total*/}
                <p>This month </p>
            </div>

            <div className = "offered-card">
                <h4>Offered</h4>
                <p>{offered}</p>{/*contains running total*/}
                <p>This Month </p>
            </div>

            <div className = "inreview-card">
                <h4>In Review</h4>
                <p>{inReview}</p>{/*contains running total*/}
                <p>This Month </p>
            </div>

            <div className = "rejected-card">
                <h4>Rejected</h4>
                <p>{rejected}</p>{/*contains running total*/}
                <p>This month </p>
            </div>
        </div>
    );
};

export default Overview;
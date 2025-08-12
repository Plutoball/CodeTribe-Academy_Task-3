// JSON Server request handler / response types for job applications

import type { JobApplication } from '../types/JobApply';

const BASE_URL = 'http://localhost:3001/applications';

/* Fetch all job applications */
export const fetchJobApplications = async (): Promise<JobApplication[]> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch job applications');
    }
    return response.json();
};

/* Add a new job application */
export const addJobApplication = async (application: JobApplication): Promise<JobApplication> => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(application),
    });
    if (!response.ok) {
        throw new Error('Failed to add job application');
    }
    return response.json();
};

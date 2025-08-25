// This module will be used to store and manage job applications in the local storage.
// useState is used to manage applications and local Storage to persist them.

import type { JobApplication } from '../types/JobApply';

const STORAGE_KEY = 'jobApplications';

export const loadApplications = () : JobApplication[] => {
    const data = localStorage.getItem (STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveApplications = (apps: JobApplication[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
};
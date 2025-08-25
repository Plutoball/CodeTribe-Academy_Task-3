import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // to add a unique id to each record
import type { JobApplication, JobStatus } from "../types/JobApply";
import { loadApplications, saveApplications } from "../utils/storage";

type FillFormProps ={
    userId: string;
    onSuccess: () => void; 
};

function FillForm({ userId, onSuccess }: FillFormProps) {

    const [formData, setFormData] = useState ({
        jobTitle: '',
        refNumber: '',
        position: '',
        company: '',
        dateApplied: '',
        status: '' as JobStatus | '',
        link: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData ((prev) => ({
            ...prev,
            [name]:value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //Pull existing records from localStorage
        const existingRecords = loadApplications();

        // Adding a new record
        const newRecord: JobApplication = {
            id: uuidv4(),
            userId: String(userId),
            title: formData.jobTitle,
            refNumber: formData.refNumber,
            position: formData.position,
            companyName: formData.company,
            dateApplied: formData.dateApplied,
            status: formData.status as JobStatus,
            link: formData.link
        };

        console.log (newRecord);

        //Add a updated record
        const updatedRecords = [...existingRecords,newRecord];
        saveApplications(updatedRecords);

        // Save back to localStorage
        //localStorage.setItem('jobApplications', JSON.stringify(updatedRecords));

        //Redirect back to dashboard via parent page
        onSuccess();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Job Title:
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
            </label>
            <br/>
             <label>
                Reference / Requisition Number:
                <input type="text" name="refNumber" value={formData.refNumber} onChange={handleChange} required />
            </label>
            <br/>
             <label>
                Position:
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />
            </label>
            <br/>
             <label>
                Company:
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
            </label>
            <br/>
             <label>
                Date Applied:
                <input type="text" name="dateApplied" value={formData.dateApplied} onChange={handleChange} required />
            </label>
            <br/>
             <label>
                Status:
                <select name="status" value={formData.status} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="applied">Applied</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="in review">In Review</option>
                    <option value="offered">Offered</option>
                    <option value="rejected">Rejected</option>
                </select>
            </label>
            <br/>
             <label>
                Link:
                <input type="url" name="link" value={formData.link} onChange={handleChange} placeholder="https://example.com" />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FillForm;
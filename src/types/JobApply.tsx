// This will be our system's Data Model for Job Applications.

export type JobStatus = 'new' | 'in review' | 'interviewed' | 'rejected' | 'offered';

export interface JobApplication {
  id: string; // Unique identifier for the job application.
  title: string; //Job Tile (Clerk, Manager, etc...).
  refNumber: string; //Acctual Job re number rom the job board.
  companyName: string; // Name of the company.
  position: string; // Position applied for (Junior, Mid, Senior, Exec, etc...).
  dateApplied: Date; // Date when the application was submitted.
  status: JobStatus; // Current status of the application.
  link: URL; //A link to the original job description.
  notes?: string; // Optional notes about the application.
};
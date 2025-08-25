// This will be our system's Data Model for Job Applications.

export type JobStatus = 'applied' | 'in review' | 'interviewed' | 'rejected' | 'offered';

export interface JobApplication {
  userId: string,
  id: string; // Unique identifier for the job application.
  title: string; //Job Tile (Clerk, Manager, etc...).
  refNumber: string; //Acctual Job re number rom the job board.
  companyName: string; // Name of the company.
  position: string; // Position applied for (Junior, Mid, Senior, Exec, etc...).
  dateApplied: string; // Date when the application was submitted - :YYYY-MM-DD.
  status: JobStatus; // Current status of the application.
  link: string; //A link to the original job description.
  notes?: string; // Optional notes about the application.
};
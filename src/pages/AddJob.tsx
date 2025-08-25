// This page will  house a form (AppliForm) to allow users to add a new job application.
import { useNavigate } from 'react-router-dom';
import FillForm from '../components/AppliForm';

function AddJob() {
    const navigate = useNavigate();

    //Get the UserID of current Sign In from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    //When a new job is created
    const JobAdded = () => {
        navigate('/dashboard');
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
            <h2 style = {{ marginBottom: '1.5rem'}}>Add New Job Application</h2>
            {/* Form components will go here */}
            <FillForm  userId ={String(currentUser.id)} onSuccess={JobAdded}/>
        </div>
    );
};

export default AddJob;
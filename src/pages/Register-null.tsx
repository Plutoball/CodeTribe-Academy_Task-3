//This page will capture new users details and register them.
//null = kept but not in use for this project...
import './register-null.css';
function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
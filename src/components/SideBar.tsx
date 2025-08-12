// Compnet to contain sidebar links

import './SideBar.css'

function SideBar () {
    return (
        <div>
        <aside className ="sidebar">
        {/** Sidebar navigation content goes here */}
        <nav>
          <div className = "diplay-picture">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>

          <h4> Name Surname</h4>

          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/resumes">Resumes</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>

      </aside>
      </div>
    );
};

export default SideBar;
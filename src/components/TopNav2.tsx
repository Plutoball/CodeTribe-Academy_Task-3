//This will serve as the general interanl top navigation.
//This navigation will be active when the users are loged in.

function TopNav2() {
    return(
    <div className = "TopNav2">
      <nav className="navbar2">
        <div className="logoB">
          <h1>JobTrack</h1>
        </div>
        <ul>
          <li><a href="/jobBoard">Job Board</a></li>
          <li><a href="/career">Career</a></li>
          <li><a href="/advice">Advice</a></li>
        </ul>
      </nav>
    </div>
    );
};

export default TopNav2;
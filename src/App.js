import './App.css';
import './Nav.css';

function App() {
  return (
      <body className="body">
        <NavBar></NavBar>
      <Content></Content>
      </body>
  );
}

function NavBar(){
  return (
      <div className="pagenav">
          <nav className="navbar">
              <ul className="webnav">
                  <li className="webnavbutton"><a href="">About Me</a></li>
                  <li className="webnavbutton"><a href="">Login</a></li>
                  <li className="webnavbutton"><a href="">Register</a></li>
                  <li className="webnavbutton"><a href="">Contact Me</a></li>
              </ul>
          </nav>
      </div>
  )
}

function Content(){
    return (
        <div>
            <div className="img">
                <img src="resources/images/wolf.jpg" alt="wolf.jpg" className="image" />
            </div>
            <h1 className="name">
                OLUWATOBILOBA AREMU.
            </h1>
            <ContentNavButton></ContentNavButton>
            <ContentBody></ContentBody>
        </div>

    )
}

function ContentNavButton(){
    return (
        <div className="pagenav">
            <ul>
                <li>
                    <button className="button">
                        <a href="#discoverme">Discover Me</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a href="#why">Why Cloud Engineering</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a >Before AltSchool</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a >What I love </a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a >I made a calculator </a>
                    </button>
                </li>
            </ul>
        </div>
    )
}

function ContentBody(){
    return (
        <div className="content">
            <h2>Discover Me📝</h2>
            <p id="discoverme" className="quotedinfohover">
                <a href="#" className="quotedinfo"
                >Hi there! I'm a budding chemical engineer who gets butterflies in his
                    stomach when working with new technologies.</a
                >
            </p>
            <br />

            <h2>What I love ❤️</h2>
            <p id="whatilove" className="quotedinfohover">
                <a href="#" className="quotedinfo"
                >Strategy and simulation games are my go to stress relievers. I also
                    enjoy watching football and music</a
                >
            </p>
            <br />
        </div>
    )
}

export default App;

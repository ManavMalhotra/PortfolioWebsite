import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import Project from "./components/Project"
import About from "./components/About"
import ContactMe from "./components/ContactMe"

import "./App.css"

const App = () => {
  return (
    <div className = "App">
    	<NavBar />
    	<Banner />
    	<Skills />
    	<Project />
    	<About/>
    	<ContactMe />
    </div>
  );
}

export default App;

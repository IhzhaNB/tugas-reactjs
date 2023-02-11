import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contac from "./components/Contac";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        {/* <!-- Navigation--> */}
        <NavigationBar />
        {/* <!-- Jumbotron --> */}
        <Jumbotron />
        {/* <!-- AboutMe --> */}
        <AboutMe />
        {/* <!-- Projects --> */}
        <Projects />
        {/* <!-- Contac --> */}
        <Contac />
        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

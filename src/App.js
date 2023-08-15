import "./App.css";
import NavbarComponent from "./components/Navbar";
import AboutMeComponent from "./components/AboutMe";
import ProjectsComponent from "./components/Projects";

function App() {
  return (
    <main className="">
      <section className="min-h-screen bg-white px-10 md:px-20 lg:px-40">
        <NavbarComponent />
        <AboutMeComponent />
      </section>
      <ProjectsComponent />
    </main>
  );
}

export default App;

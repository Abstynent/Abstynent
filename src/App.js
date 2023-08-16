import "./App.css";
import NavbarComponent from "./components/Navbar";
import HomeComponent from "./components/Home";
import ContactComponent from "./components/ContactComponent";
import ProjectsComponent from "./components/Projects";

function App() {
  return (
    <main className="">
      <section className="min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-100 px-10 md:px-20 lg:px-40">
        <NavbarComponent />
        <HomeComponent />
      </section>
      <ProjectsComponent />
      <ContactComponent />
    </main>
  );
}

export default App;

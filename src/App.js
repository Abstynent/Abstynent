import "./App.css";
import NavbarComponent from "./components/Navbar";
import AboutMeComponent from "./components/AboutMe";

function App() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <NavbarComponent />
        <AboutMeComponent />
      </section>
    </main>
  );
}

export default App;

import Hero from "../components/User/Home/Hero";
import About from "../components/User/About/About";
import Services from "../components/User/Home/Services";
import Testimonials from "../components/User/Home/Testimonials";
import Companies from "../components/User/Home/Companies";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Companies />
    </main>
  );
};

export default Home;
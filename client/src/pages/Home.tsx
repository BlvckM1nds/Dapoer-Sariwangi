import Hero from "../components/User/Home/Hero";
import Services from "../components/User/Home/Services";
import Favorite from "../components/User/Home/Favorite";
import Testimonials from "../components/User/Home/Testimonials";
import Companies from "../components/User/Home/Companies";

const Home = () => {
  return (
    <main>
      <Hero />
      <Favorite />
      <Services />
      <Testimonials />
      <Companies />
    </main>
  );
};

export default Home;
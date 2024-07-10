import Hero from "../components/User/Resto/Hero";
import Favorite from "../components/User/Resto/Favorite";
import Categories from "../components/User/Resto/Categories";
import Promotions from "../components/User/Resto/Promotions";
import Rooms from "../components/User/Resto/Rooms";
import Location from "../components/User/Resto/Location";

const Resto = () => {
  return (
    <main>
      <Hero />
      <Favorite />
      <Categories />
      <Promotions />
      <Rooms />
      <Location />
    </main>
  );
};

export default Resto;
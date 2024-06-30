import { Link } from "react-router-dom";

import Wrapper from "../../Common/Wrapper";
import Container from "../../Common/Container";
import Button from "../../Common/Button";
import FavMenuSlider from "./FavMenuSlider";

const Favorite = () => {
  return (
    <Wrapper id="favorite" className="bg-light py-20 lg:py-28">
      <Container className="space-y-16">
        {/* Heading */}
        <div className="heading text-center">
          <h2 className="font-rabona font-bold tracking-wide text-4xl lg:text-5xl text-accent">Menu Favorit</h2>
          <p className="text-primary/60 lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        {/* Favorite Menus */}
        <FavMenuSlider />
        {/* Reservation */}
        <Link to="/" className="block text-center">
          <Button>Lihat Menu</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Favorite;
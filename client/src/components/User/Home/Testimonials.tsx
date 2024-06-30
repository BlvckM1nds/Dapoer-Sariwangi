import Wrapper from "../../Common/Wrapper";
import Container from "../../Common/Container";
import sampleImage from "../../../assets/vegetables.jpg";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <Wrapper id="testimonials" className="bg-cover bg-center py-20 lg:py-28" style={{ backgroundImage: `url(${sampleImage})` }}>
      <Container className="space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-rabona font-bold tracking-wide text-white text-4xl lg:text-5xl">Kata Mereka</h2>
          <p className="text-white lg:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Review Cards */}
        <TestimonialSlider />
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
import Button from "../../Common/Button";
import Wrapper from "../../Common/Wrapper";
import sampleImage from "../../../assets/vegetables.jpg";

const About = () => {
  return (
    <Wrapper id="about" className="bg-light py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-8 lg:gap-14">
          <div className="flex-1 space-y-3.5 lg:space-y-5 text-center lg:text-left">
            <h4 className="uppercase font-semibold text-secondary text-sm">Tentang Kami</h4>
            <h2 className="font-prata text-2xl lg:text-4xl text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, rem!</h2>
            <p className="text-sm lg:text-lg text-primary/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic adipisci beatae voluptatem voluptas pariatur iusto consequuntur optio assumenda, perferendis, eos illum quae reiciendis cumque nostrum voluptatum laboriosam sunt libero sequi. Est et praesentium ratione!</p>
            <Button>Tentang Kami</Button>
          </div>
          <figure className="flex-1" style={{ filter: "drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.5))" }}>
            <img src={sampleImage} alt="Menu Dapoer Sariwangi" />
          </figure>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
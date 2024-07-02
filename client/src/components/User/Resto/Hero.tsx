import Wrapper from "../../Common/Wrapper";
import bgHero from "../../../assets/cooks-bw.jpg";
import ReservationForm from "./ReservationForm";

const Hero = () => {
  return (
    <div className="bg-light pb-20">
      <Wrapper className="pt-40 pb-64 lg:pt-56 lg:pb-80 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${bgHero})` }}>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">Berbagai racikan nikmat <br />untuk Anda nikmati</h1>
      </Wrapper>
      <ReservationForm />
    </div>
  );
};

export default Hero;
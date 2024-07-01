import Wrapper from "../../Common/Wrapper";
import bgHero from "../../../assets/cooks-test.png";

const Hero = () => {
  return (
    <Wrapper className="min-h-[75vh] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: `url(${bgHero})`}}>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold">Berbagai racikan nikmat <br />untuk Anda nikmati</h1>
    </Wrapper>
  );
};

export default Hero;
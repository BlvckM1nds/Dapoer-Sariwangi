import Wrapper from "../../Common/Wrapper";
import Container from "../../Common/Container";

import logo2 from "../../../assets/astra-international.png";
import logo3 from "../../../assets/ibm.png";

const Companies = () => {
  return (
    <Wrapper className="bg-light py-20 lg:py-28">
      <Container className="space-y-5">
        <div className="space-y-1.5 text-primary">
          <p className="max-w-xl mx-auto text-center text-sm lg:text-base">Pemesanan lebih dari <span className="text-secondary">3000+</span> pax per harinya.</p>
          <h3 className="font-rabona font-bold tracking-wide text-center text-2xl lg:text-4xl">Terima kasih atas kepercayaan Anda</h3>
        </div>
        <div className="max-w-4xl mx-auto grayscale flex flex-wrap items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => (
            <img key={val} src={val % 2 === 0 ? logo2 : logo3} alt={val % 2 === 0 ? "astra" : "indofood"} className="object-contain w-[120px] lg:w-[160px] my-3 mx-6" />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Companies;
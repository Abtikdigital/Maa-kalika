import BgImage from "../assets/Hero/BgImage.png";
import ArrowImage from "../assets/Hero/ArrowImage.png";

function Hero() {
  return (
    <section
    id="home"
      className="py-10 lg:py-16 px-6 md:px-20 lg:px-30 bg-cover bg-no-repeat h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="h-full flex justify-center items-center">
        <h2 className="heading-1">
          Natural Products <br />
          For Lovers of{" "}
          <span className="relative inline-block">
            <span className="inline-block text-[#EEC044]">Healthy</span>
            <img
              src={ArrowImage}
              alt="Arrow"
              className="absolute -bottom-2 right-0 "
            />
          </span>
          <br /> Organic Food
        </h2>
      </div>
    </section>
  );
}

export default Hero;

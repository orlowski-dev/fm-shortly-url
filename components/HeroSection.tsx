import { LinkButton } from "./Buttons";

export const HeroSection = () => (
  <section className="hero-section grid md:mt-10 container md:pl-6 mx-auto ">
    <div className="image-area"></div>
    <div className="content-area p-6 md:p-0">
      <h1 className="text-h1-m md:text-h1-d md:text-left text-very-dark-violet text-center">More than just shorter links</h1>
      <p className="text-center text-p-m md:text-p-d md:text-left text-grayish-violet mt-4">
        Build your brand`s recognition and get detailed insights on how your links are performing.
      </p>
      <div className="text-center mt-6 md:text-left md:mt-8">
        <LinkButton
          href="/"
          textContent="Get Started"
          type="cyan-rounded-max"
          customStyles="py-3 px-9"
        />
      </div>
    </div>
  </section>
)
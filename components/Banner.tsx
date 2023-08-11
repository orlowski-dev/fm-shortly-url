import { LinkButton } from "./Buttons";

export const Banner = () => (
  <section className="banner bg-dark-violet text-white px-0 py-8 md:p-9">
    <div className="text-center container p-6 mx-auto grid gap-8 justify-center">
      <h2 className="text-h2-28-m md:text-h2-28-d">Boost your links today</h2>
      <div>
        <LinkButton
          textContent="Get Started"
          href="/"
          type="cyan-rounded-max"
          customStyles="!text-[1.25rem] !py-[.875rem] !px-[2.5rem]"
        />
      </div>
    </div>
  </section>
)
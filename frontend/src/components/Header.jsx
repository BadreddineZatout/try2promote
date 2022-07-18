import Nav from "./Nav";
import arrow from "../assets/arrow.svg";
import skin from "../assets/skin.png";
import rate from "../assets/rate.png";
import quote from "../assets/quote.png";
import gentle from "../assets/gentle.png";
import scrole from "../assets/scrole.png";

function Header() {
  return (
    <div id="header" className="relative px-40 pt-10">
      <Nav />
      <div className="relative mt-5 flex p-5">
        <div className="flex w-1/2 flex-col gap-y-10">
          <div className="mt-16 w-9/12 font-rambla text-4xl font-medium">
            Feel Comfortable in Flowless skin without hair
          </div>
          <div className="w-11/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="flex gap-x-10">
            <div>
              <button className="bg-Jasmine px-10 py-3 font-rambla">
                book a Session
              </button>
            </div>
            <div className="flex cursor-pointer items-center justify-between">
              <img src={arrow} />
              <span className="ml-5">Watch demo Video</span>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <img className="absolute top-10" src={skin} />
          <img className="absolute top-64 left-3/4" src={rate} />
          <img className="absolute top-96 right-0" src={gentle} />
          <img className="absolute top-80 -left-32" src={quote} />
        </div>
      </div>
      <img className="absolute bottom-0 left-1/2" src={scrole} />
    </div>
  );
}

export default Header;

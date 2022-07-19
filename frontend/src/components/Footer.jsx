import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-Alabaster px-20 pt-20 pb-5">
      <div className="flex items-center justify-between">
        <div className="flex w-1/2 flex-col items-start gap-y-5">
          <div>
            <img src={logo} />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className="flex gap-x-3">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
        </div>
        <div id="footer" className="flex w-3/4 justify-evenly font-rambla">
          <div>
            <h1>About Us</h1>
            <h2>About Us</h2>
            <h2>Service Us</h2>
            <h2>Contact</h2>
            <h2>Company</h2>
          </div>
          <div>
            <h1>Company</h1>
            <h2>Partnership</h2>
            <h2>Terms of Use</h2>
            <h2>Privacy</h2>
            <h2>Sitemap</h2>
          </div>
          <div className="flex flex-col gap-y-3">
            <h1>Get in touch</h1>
            <h2 className="w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h2>
            <div>
              <input
                className="mr-3 w-2/5 rounded-md bg-gray-300 py-3 px-2"
                placeholder="Email"
                type="text"
              />
              <button className="mx-auto flex-none rounded-md bg-Jasmine px-8 py-3 font-rambla text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-2 font-inter text-Chestnut">
        Copyright © 2022 Lazero.
      </div>
    </div>
  );
}

export default Footer;

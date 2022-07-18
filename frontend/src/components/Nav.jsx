import logo from "../assets/logo.png";
function Nav() {
  return (
    <div className="flex items-center justify-around bg-white py-3 shadow-lg">
      <div>
        <h1 className="font-playball text-2xl font-bold text-Chestnut">
          <img src={logo} />
        </h1>
      </div>
      <div id="links" className="flex w-1/2 items-center justify-evenly">
        <a href="#" className="text-Chestnut">
          Home
        </a>
        <a href="#">Technology</a>
        <a href="#">Treatment</a>
        <a href="#">Price\Booking</a>
        <a href="#">Our locals</a>
      </div>
      <div>
        <button className="bg-Jasmine py-2 px-10 font-rambla font-semibold">
          Reservez
        </button>
      </div>
    </div>
  );
}

export default Nav;

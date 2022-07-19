function MainInfo({ title }) {
  return (
    <div className="w-2/5 font-rambla">
      <div className="mb-5 text-2xl">{title}</div>
      <div className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.{" "}
      </div>
      <div>
        <button className="mx-auto mt-5 flex-none bg-Jasmine px-10 py-3 font-rambla text-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default MainInfo;

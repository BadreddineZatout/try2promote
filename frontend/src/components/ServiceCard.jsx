import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="flex w-1/4 flex-col outline outline-GradientBlack">
      <div className="mx-auto mt-10">
        <img src={service.img} />
      </div>
      <div className="mx-auto font-rambla font-semibold">{service.name}</div>
      <div className="mx-5 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </div>
    </div>
  );
}

export default ServiceCard;

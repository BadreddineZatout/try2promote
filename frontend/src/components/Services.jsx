import { useState } from "react";
import ServiceCard from "./ServiceCard";

import prices from "../assets/prices.png";
import new_tech from "../assets/new tech.png";
import premium from "../assets/premium.png";
import account from "../assets/account.png";

function Services() {
  const [serviceList, setServiceList] = useState([
    {
      name: "Friendly Pricing",
      img: prices,
    },
    {
      name: "New technologie",
      img: new_tech,
    },
    {
      name: "Premium Service",
      img: premium,
    },
    {
      name: "Personal Account",
      img: account,
    },
  ]);
  return (
    <div className="my-24 flex justify-center gap-x-10 px-32">
      {serviceList &&
        serviceList.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
    </div>
  );
}

export default Services;

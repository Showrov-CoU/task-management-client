import { useEffect, useState } from "react";
import BenefitCard from "../../Components/BenefitCard";

const Benefit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./benefit.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5">
          Discover Who Benefits
        </h1>
        <h3 className="text-2xl font-normal text-center mb-2">
          Tailored Task Management for Every Role
        </h3>
        <p className="text-base text-center">
          Explore TaskMinder&apos;s tailored task management for diverse roles.
          Whether you&apos;re a developer, marketer, freelancer, or educator,
          our platform adapts to your unique workflow. Streamline tasks
          effortlessly and enhance productivity. Join us for a personalized
          approach to organized success!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">

        {data.map((data) => (
          <BenefitCard key={data.id} data={data}></BenefitCard>
        ))}
      </div>
    </div>
  );
};

export default Benefit;

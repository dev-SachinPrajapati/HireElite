import React from "react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Cybersecurity",
      description:
        "Robust cybersecurity solutions to protect your digital assets, ensuring data security and compliance with industry standards.",
    },
    {
      id: 2,
      service: "Blockchain Development",
      description:
        "Cutting-edge blockchain solutions for secure transactions, smart contracts, and decentralized applications.",
    },
    {
      id: 3,
      service: "Artificial Intelligence",
      description:
        "AI-powered solutions to automate processes, enhance decision-making, and drive innovation through machine learning and deep learning models.",
    },
    {
      id: 4,
      service: "UI/UX Design",
      description:
        "User-centric UI/UX design services to create visually appealing and intuitive digital experiences that enhance user engagement.",
    },
    {
      id: 5,
      service: "IT Consulting",
      description:
        "Strategic IT consulting services to optimize technology infrastructure, improve efficiency, and drive business growth.",
    },
    {
      id: 6,
      service: "IoT Solutions",
      description:
        "Innovative Internet of Things (IoT) solutions for smart devices, automation, and seamless connectivity across industries.",
    },
  ];
  
  return (
    <section className="services">
      <h3>Top Elite</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;

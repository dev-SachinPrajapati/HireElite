const TopNiches = () => {
 const services = [
  {
    id: 1,
    service: "MERN Stack Developer",
    description:
      "Specializes in building dynamic web applications using MongoDB, Express.js, React, and Node.js for end-to-end development.",
  },
  {
    id: 2,
    service: "Full Stack Developer",
    description:
      "Develops both frontend and backend systems, ensuring seamless integration between user interfaces and server-side logic.",
  },
  {
    id: 3,
    service: "Artificial Intelligence Engineer",
    description:
      "AI-powered solutions to automate processes, enhance decision-making, and drive innovation through machine learning and deep learning models.",
  },
  {
    id: 4,
    service: "UI/UX Designer",
    description:
      "User-centric UI/UX design services to create visually appealing and intuitive digital experiences that enhance user engagement.",
  },
  {
    id: 5,
    service: "IT Consultant",
    description:
      "Strategic IT consulting services to optimize technology infrastructure, improve efficiency, and drive business growth.",
  },
  {
    id: 6,
    service: "IoT Engineer",
    description:
      "Innovative Internet of Things (IoT) solutions for smart devices, automation, and seamless connectivity across industries.",
  },
  {
    id: 7,
    service: "Cloud Architect",
    description:
      "Designs and manages scalable, secure, and cost-effective cloud infrastructures to support enterprise applications.",
  },
  {
    id: 8,
    service: "DevOps Engineer",
    description:
      "Automates development and operations processes, ensuring continuous integration, delivery, and efficient deployments.",
  },
  {
    id: 9,
    service: "Data Scientist",
    description:
      "Analyzes large datasets to extract insights, build predictive models, and support data-driven decision-making.",
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

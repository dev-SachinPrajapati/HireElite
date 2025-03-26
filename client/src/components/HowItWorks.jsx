import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How It Works</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Sign Up & Get Started</h4>
          <p>
            Register for a free account as a job seeker or employer. Quickly set up your profile to begin posting jobs or applying to exciting opportunities.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Explore & Apply</h4>
          <p>
            Employers can create job listings, while job seekers can browse numerous openings. Use smart filters to find roles that best suit your experience and goals.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Connect & Succeed</h4>
          <p>
            Employers can review applicants and make offers. Job seekers can evaluate offers and choose positions that align with their aspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

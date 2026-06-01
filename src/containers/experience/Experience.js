import React from "react";
import "./Experience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Experience() {
  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperiences">
            <div>
              <h1 className="experience-heading">{workExperiences.title}</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        meta: card.meta,
                        role: card.role,
                        date: card.date,
                        descBullets: card.descBullets,
                        skills: card.skills
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}

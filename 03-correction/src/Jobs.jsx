import React from "react";

const Jobs = () => {
  const experiencesFromFakeApi = [
    {
      id: 1,
      title: "Développeur front",
      company: "Company 1",
      description: "Développement d'une application web front",
      startDate: "2021-01-01",
      endDate: "2021-02-01",
      isCurrent: false,
    },
    {
      id: 2,
      title: "Développeur back",
      company: "Company 2",
      description: "Développement d'une application web back",
      startDate: "2022-02-01",
      endDate: "2022-03-01",
      isCurrent: false,
    },
    {
      id: 3,
      title: "Développeur fullstack",
      company: "Company 3",
      description: "Développement d'une application web fullstack",
      startDate: "2023-03-01",
      endDate: null,
      isCurrent: true,
    },
  ];

  return (
    <section>
      <h2>Mes expériences</h2>
      <ul>
        {experiencesFromFakeApi.map((experience) => {
          return (
            <li key={experience.id} className={experience.isCurrent ? "job job-current" : "job"}>
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p>{experience.description}</p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
              <p>{experience.isCurrent && "JOB ACTUEL"}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Jobs;
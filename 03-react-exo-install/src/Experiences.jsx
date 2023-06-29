const Experiences = () => {
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
        <div className="App-Experience">
          {experiencesFromFakeApi.map((experience) => {

return (
    experience.isCurrent && (

                <article>
                  <h2>{experience.title}</h2>
                  <h2>{experience.company} </h2>
                  <p>{experience.description}</p>
                  <p>{experience.startDate}</p>
                  <p>{experience.endDate}</p>
                </article>
          )
          );
        })}
           </div>
         );
       }
       export default  Experiences
    

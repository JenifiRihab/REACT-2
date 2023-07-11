import { useState } from "react";

    const Welcome= () =>{

        const [displayMessage, setdisplayMessage] = useState(true);
        const handleClick = () => {
            console.log("click");
            setdisplayMessage(false);

        };

        return(

        <section className="welcome-section">
            <button className="btn" onClick={handleClick}>Bienvenue</button>
            {displayMessage && (
            <div>
                 <h2 className=" welcome">BIENVENUE</h2>
            </div>
          )}
        </section>

        );

    };
   
   export default Welcome
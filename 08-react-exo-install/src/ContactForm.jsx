import { useState } from "react";

const ContactForm = () => {
  const [contactFormRequest, setContactFormRequest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setContactFormRequest({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      message: event.target.message.value,
    });
  };

// export default ContactForm;

return (

  <div>
  <h1>Contactez moi</h1>

  <form className="form " onSubmit={handleSubmit}>

    <label htmlFor="firstName">Prénom</label>
    <input type="text" id="firstName" name="firstName" />

<br /><hr />

    <label htmlFor="lastName">Nom</label>
    <input type="text" id="lastName" name="lastName" />

<br /> <hr />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" />

<br /><hr />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" />
    
<br /><hr />

    <button type="submit">Envoyer</button>

  </form>

    {contactFormRequest.email !== "" && (

// <p className="prg">Merci de m'avoir contacté {contactData.firstName} {contactData.lastName}</p>
    <p className="prg" >Merci d'avoir envoyé le message, le service publique vous répondra à ces heures d'ouvertures, le lundi de 08h00 à 08h22 Et les vendredi des années bisextiles de 14h00 à 14h01. Vos infos :{" "}{contactFormRequest.firstName} {contactFormRequest.lastName} : {contactFormRequest.email} "{contactFormRequest.message}"</p>
      )}

    </div>
  );
};

export default ContactForm;



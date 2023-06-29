
  const Profile = () => {
   const userInfosFromFakeApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web"
    };

    return (
        <div className="App-Profile">
          <p>{userInfosFromFakeApi.firstName}</p>
          <p>{userInfosFromFakeApi.lastname}</p>
          <p>{userInfosFromFakeApi.age}</p>
          <p>{userInfosFromFakeApi.email}</p>        
          <p>{userInfosFromFakeApi.phone}</p>
          <p>{userInfosFromFakeApi.adress}</p>
          <p>{userInfosFromFakeApi.city}</p>
          <p>{userInfosFromFakeApi.zipCode}</p>
          <p>{userInfosFromFakeApi.country}</p>
          <p>{userInfosFromFakeApi.job}</p>
        
        </div>
      );
    };

    export default Profile;
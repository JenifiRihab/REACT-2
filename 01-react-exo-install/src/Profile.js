const Profile = () => {
    const userInfos = {
      fullName: "Rihab Jenfi",
      job: "Web Dev",
      age: 25 ,
      isActive: false,
    };
  
    return (
      <div>
        <p>{userInfos.fullName}</p>
        <p>{userInfos.job}</p>
        <p>{userInfos.age}</p>
      </div>
    );
  };
  
  export default Profile;
const showProfile = async (profile) => {
    console.log(profile.age);
  };
  
  const showName = async (profile) => {
    console.log(profile.name);
  };
  
  // peut prendre 2 secondes à être executée
  const response = await fetch("https://localhost:8000/api/profiles/1");
  const profile = await response.json();
  
  showName(profile);
  showProfile(profile);
import React from "react";
import Weather from "./components/Weather.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Presentation from "./components/Presentation.jsx";

const App = () => {
  return (
    <div>
      <Weather temperature={30} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Presentation timeOfDay="morning" />
    </div>
  );
};

export default App;

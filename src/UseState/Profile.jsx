// import React, { useState } from "react";
// import Button from "./Button";

// const Profile = () => {
//   const [log, setLog] = useState("Logged In");

//   return (
//     <>
//       <p>{log}</p>
//       <Button setLog={setLog} log={log} />
//     </>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import Button from "./Button";

const Profile = () => {
  const [logged, setLogged] = useState("Logged In");

  function handlelogged() {
    setLogged((prev) => (prev === "Logged In" ? "Logged Out" : "Logged In"));
  }
  return (
    <div>
      <p>{logged}</p>
      <Button onToggle={handlelogged} />
    </div>
  );
};

export default Profile;

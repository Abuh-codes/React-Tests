// import React from "react";

// const Button = ({ setLog, log }) => {
//   function Click() {
//     if (log === "Logged-In") {
//       setLog("Logged-Out");
//     } else {
//       setLog("Logged-In");
//     }
//   }
//   return (
//     <div>
//       <button onClick={Click}>Toggle-Login</button>
//     </div>
//   );
// };

// export default Button;
import React from "react";

const Button = ({ onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>Toggle Login</button>
    </div>
  );
};

export default Button;

// import React from "react";
// import { useState } from "react";
///////////////////////////// Exercise 1 //////////////////////
// const App = () => {
//   const [input, setInput] = useState("");
//   function Output(e) {
//     setInput(e.target.value);
//   }
//   return (
//     <>
//       <h1> {input}</h1>
//       <input type="text" onInput={Output} />
//     </>
//   );
// };

// export default App;

////////////////////////////////////// Exercise 2 //////////////////////////
// const App = () => {
//   const [fname, setFName] = useState("");
//   const [lname, setLName] = useState("");
//   const [email, setEmail] = useState("");
//   const [h1Text, setH1Text] = useState("");

//   function handleFname(e) {
//     setFName(e.target.value);
//   }
//   function handleLname(e) {
//     setLName(e.target.value);
//   }
//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     setH1Text(`First Name:$(fname) Last Name:${lname} Email: ${email}`);
//     setFName("");
//     setLName("");
//     setEmail("");
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" type="fname" onInput={handleFname} value={fname} />
//         <input type="text" type="lname" onInput={handleLname} value={lname} />
//         <input type="text" type="email" onInput={handleEmail} value={email} />
//         <button type='submit'>Submit</button>
//       </form>
//       <h1>{h1Text}</h1>
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [fname, setFName] = useState("");
//   const [lname, setLName] = useState("");
//   const [email, setEmail] = useState("");
//   const [output, setOutput] = useState("");

//   function handleFname(e) {
//     setFName(e.target.value);
//   }
//   function handleLname(e) {
//     setLName(e.target.value);
//   }
//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     setOutput(`${fname} ${lname} ${email}`);
//     setFName("");
//     setLName("");
//     setEmail("");
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="fname"
//           value={fname}
//           placeholder="First Name"
//           onInput={handleFname}
//         />
//         <input
//           type="text"
//           name="lname"
//           value={lname}
//           placeholder="Last Name"
//           onInput={handleLname}
//         />
//         <input
//           type="text"
//           name="email"
//           value={email}
//           placeholder="Email"
//           onInput={handleEmail}
//         />
//         <button>Submit</button>
//       </form>
//       <h1>{output}</h1>
//     </>
//   );
// };

// export default App;

////////////////////////////// Exercise 3 ////////////
// import React from "react";
// import Profile from "./Exercise3/Profile";

// const App = () => {
//   return <div>{<Profile />}</div>;
// };

// export default App;

//////////////////////////// REVISION //////////////////////

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleCountPlus = () => (count < 10 ? setCount(count + 1) : null);
//   const handleCountMinus = () => (count > 1 ? setCount(count - 1) : null);
//   return (
//     <div>
//       <button onClick={handleCountPlus}>+</button>
//       <h1>{count}</h1>
//       <button onClick={handleCountMinus}>-</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [inputText, setInputtext] = useState("Type Here..");

//   function handleInputText(e) {
//     setInputtext(e.target.value);
//   }
//   return (
//     <div>
//       <input type="text" onInput={handleInputText} />
//       <h1>{inputText}</h1>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [submit, setSubmit] = useState("");

//   function handleFirstName(e) {
//     setFirstName(e.target.value);
//   }
//   function handleLastName(e) {
//     setLastName(e.target.value);
//   }
//   function handleEmail(e) {
//     setEmail(e.target.value);
//   }
//   function handleClick(e) {
//     e.preventDefault();
//     setSubmit(`${firstName} ${lastName}${email}`);
//   }
//   return (
//     <div onSubmit={handleClick}>
//       <form>
//         <input type="text" value={firstName} onInput={handleFirstName} />
//         <input type="text" value={lastName} onInput={handleLastName} />
//         <input type="text" value={email} onInput={handleEmail} />
//         <button type="submit">Submit</button>
//       </form>
//       <h1> {submit}</h1>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Profile from "./Exercise3/Profile";

// const App = () => {
//   return (
//     <div>
//       <Profile />
//     </div>
//   );
// };

// export default App

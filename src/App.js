import React from "react";
import { useState } from "react";

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

const App = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");

  function handleFname(e) {
    setFName(e.target.value);
  }
  function handleLname(e) {
    setLName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setOutput(`${fname} ${lname} ${email}`);
    setFName("");
    setLName("");
    setEmail("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="First Name"
          onInput={handleFname}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="Last Name"
          onInput={handleLname}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onInput={handleEmail}
        />
        <button>Submit</button>
      </form>
      <h1>{output}</h1>
    </>
  );
};

export default App;

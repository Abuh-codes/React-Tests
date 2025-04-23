/*
    1. Create a new Vite React project

    2. Use the pokemon API for this exercise:
       https://pokeapi.co/

    3. Create a Pokemon.jsx file and export a
       component of the same name

    4. Make it so that when the component mounts,
       you fetch the data for the pokemon 'squirtle'
       and display the following data for it in JSX:
       - name
       - image (any)
       - weight

    5. Import Pokemon in to main.jsx and replace the
       <App /> with it

    6. Test that it works in your Browser: you should see
       all the data above for Squirtle after a second or two
*/
// import React from "react";
// import { useState, useEffect } from "react";

// const WarmUp = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const url = fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
//       .then((response) => response.json())
//       .then((d) => {
//         console.log(d);
//         setData(d);
//       });
//   }, []);
//   return (
//     <>
//       <h2>{data?.name}</h2>
//       <img src={data?.sprites.front_default} alt="" />
//       <p>{data?.weight}</p>
//     </>
//   );
// };

// export default WarmUp;

//////////////////REDOING AGAIN ///////

// import React, { useEffect, useState } from "react";

// const WarmUp = () => {
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     const url = fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setPokemon(data);
//       });
//   }, []);
//   return (
//     <div>
//       <p>{pokemon?.name}</p>
//       <img src={pokemon?.sprites.front_default} alt="" />
//       <p>{pokemon?.weight}</p>
//     </div>
//   );
// };

// export default WarmUp;

/////////////////////////////BONUS QUESTION ///////////////////////////////
// Create a component called UsersList.

// Inside the component, set up:

// A state variable to store the list of users.

// A state variable to track the loading state (true/false).

// Use useEffect to fetch data when the component first loads:

// Fetch data from: https://jsonplaceholder.typicode.com/users

// Convert the response to JSON.

// Store the data in your users state.

// Set loading to false once done.

// Handle errors in the fetch request using .catch().

// Display:

// A loading message like "Loading users..." while fetching.

// A list of user names once the data is ready.

// 🧠 Bonus Challenge (Optional):
// Add a console.log() to see the full response data and inspect it in your browser's console.

import React, { useEffect, useState } from "react";

const WarmUp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Users:", error);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default WarmUp;

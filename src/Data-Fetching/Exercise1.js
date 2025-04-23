/*
    1. Create a new Vite React project

    2. Use the pokemon API for this exercise:
       https://pokeapi.co/

    3. Create a Pokemon.jsx file and export a
       component of the same name

    4. Make it so that when the component mounts,
       you fetch the data for the pokemon 'mootin'
       and display the following data for it in JSX:
       - name
       - image (any)
       - weight
       * Note, this pokemon does not exist (sadly)
         Use the keys you'd expect a real pokemon to have
         similar to the warmup exercise

    5. How would you deal with this error to display an
       Error message to the user without crashing the app?

    6. Import Pokemon in to main.jsx and replace the
       <App /> with it

    7. Test that it works in your Browser: Test both 'mootin'
       and a real pokemon like 'charmander' to see if it works
       correctly when the name is correct
*/
import React, { useState, useEffect } from "react";

const WarmUp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // 🆕 Error state
  const [loading, setLoading] = useState(true); // Optional: show loading state

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/squirtlee")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon not found!"); // Handle 404s
        }
        return response.json();
      })
      .then((d) => {
        setData(d);
        setError(null); // Clear any previous error
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Pokémon:", err);
        setError(err.message); // Set a user-friendly error message
        setLoading(false);
      });
  }, []);

  // 🧠 Render logic
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <>
      <h2>{data?.name}</h2>
      <img src={data?.sprites?.front_default} alt={data?.name} />
      <p>Weight: {data?.weight}</p>
    </>
  );
};

export default WarmUp;

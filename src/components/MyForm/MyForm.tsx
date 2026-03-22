/* eslint-disable react-hooks/immutability */
import { useState } from "react";

function MyForm() {
  const [player, setPlayer] = useState({
    score: 0,
    fName: "",
    lName: "",
  });
  return (
    <form action="">
      <label htmlFor="">
        Score : <span>{player.score}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            setPlayer({ ...player, score: player.score + 1 });
          }}
        >
          +1
        </button>
      </label>
      <br /> <br />
      <label htmlFor="">First Name : </label>
      <input
        type="text"
        value={player.fName}
        onChange={(e) => setPlayer({ ...player, fName: e.target.value })}
      />
      <br /> <br />
      <label htmlFor="">Last Name :</label>
      <input
        type="text"
        value={player.lName}
        onChange={(e) => setPlayer({ ...player, lName: e.target.value })}
      />
    </form>
  );
}

export default MyForm;

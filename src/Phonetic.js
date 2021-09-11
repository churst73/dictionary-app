import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic mt-4">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        listen
      </a>{" "}
      /{props.phonetic.text}/
    </div>
  );
}

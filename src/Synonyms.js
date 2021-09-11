import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms mb-4">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              <em>{synonym}</em>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

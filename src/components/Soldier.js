import React from "react";

export default function Soldier({ name, age, children }) {
  return (
    <div>
      <h3>
        {name}: {age}
      </h3>
      <p>{children}</p>
    </div>
  );
}

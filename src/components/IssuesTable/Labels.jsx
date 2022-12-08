import React from "react";

const Labels = ({ labels }) => {
  return (
    <div className="label-wrapper">
      {labels.length > 0 &&
        labels.map(({ id, color, name }) => (
          <span key={id} style={{ backgroundColor: color || "#fff" }}>
            {name}
          </span>
        ))}
    </div>
  );
};

export default Labels;

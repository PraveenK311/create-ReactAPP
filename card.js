import React from "react";

function Card({ title, content }) {
  return (
    <div>
      <h1 className="page-title"> Kloudone Note App Using React Application</h1><br/>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;

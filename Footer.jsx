import React from "react";

function Footer() {
  const year = new Date().getFullYear();
 
  return (
    <footer>
      <b>Copyright ⓒ {year}</b>
      <b>Date:(14-12-2020)</b>
      <h6>
        <i>PraveenKumar</i>
      </h6>
    </footer>
  );
}

export default Footer;
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "best"];
  let noun = ["programmer", "bot", "website"];
  let domains = [".com", ".net", ".us"];

  let randomDomain = [];
  let domainHTML = ` `;

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domains.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + domains[l];
          randomDomain.push(domain);

          domainHTML += `
          <li class="list-group-item">${domain}</li>
          `;
        }
      }
    }
  }

  document.querySelector(".generator").innerHTML = domainHTML;
};

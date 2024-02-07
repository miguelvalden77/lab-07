import "./index.css";
import { Header } from "header/Header"
import { Footer } from "footer/Footer"

const currentDate = new Date();

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const month = months[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Función para obtener el sufijo para el día (e.g., "1st", "2nd", "3rd", "4th", ...)
function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  } else {
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}

const daySuffix = getDaySuffix(day);

const formattedDate = `${month} ${day}${daySuffix} ${year}`;


document.getElementById("app").innerHTML = `
<div class="container">
  <header-component></header-component>
  <div>Name: host</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
  ${formattedDate}
  <footer-component></footer-component>
</div>
`;

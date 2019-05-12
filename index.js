// Write your code here!
document.querySelector('main#main').remove();
const newHeader = document.body.appendChild(document.createElement("h1"));
newHeader.setAttribute("id", "victory");

newHeader.innerHtml= "ken is the champion"
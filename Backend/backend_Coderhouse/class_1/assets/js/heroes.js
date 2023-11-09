console.log("test de un script");

let html = "";
heroes.foreach((h) => {
  html += "<p>" + h + "</p>";
});
console.log(html);
let divHeroes = document.createElement("div");

divHeroes.innerHTML = html;
document.body.append(divHeroes);
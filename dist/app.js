$(document).ready(() => {
  const fndHome = document.getElementById("home");
  const fndProduct = document.getElementById("find-product");
  fndProduct.addEventListener("click", listProducts);


});
let produtos = [];

function findProduct() {
  return "q=";
}

function error() {
  console.log("erro");

}

function listProducts(event) {
  event.preventDefault();
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=pets`

  $.ajax({
    type: "GET",
    url: url,
    success: chargeProducts,
    error: error

  });
}

function chargeProducts(data) {
  produtos = data.results;
  showProducts();
}

function showProducts() {
  let showImage = document.getElementById("result-search");
  showImage.innerHTML = `${produtos.map(doc => `
  <div class="col produto"><p><b>${doc.title}</b></p>
  <img class="imagens" src=${doc.thumbnail}>
  <p>R$ ${doc.price}</p>
  <button onclick="clickCounter()" type="button">Comprar</button></div>`).join("")}`

}
function clickCounter() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

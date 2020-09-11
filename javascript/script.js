let products = document.getElementById("products");

let productsList = [
  [1, "169.00", "Fontaine", "سقاية"],
  [2, "89.00", "Tajine", "طاجين"],
  [3, "44.00", "Bouteille", "قنينة من الطين"],
  [1, "169.00", "Fontaine", "سقاية"],
  [2, "89.00", "Tajine", "طاجين"],
  [3, "44.00", "Bouteille", "قنينة من الطين"],
];

for (let i = 0; i < productsList.length; i++) {
  products.innerHTML += `
    <div class="product shadow-sm">
        <div class="imgProduct">
            <div style="background-image: url(img/${productsList[i][0]}.png)"></div>
        </div>
        <hr />
        <div class="infoProduct">
            <div>
            <h4 class="text-center text-danger">${productsList[i][1]} DH</h4>
            </div>
            <div>
            <h5 class="text-center text-muted">${productsList[i][2]}</h5>
            </div>
            <div>
            <h5 class="text-center arfont text-muted">${productsList[i][3]}</h5>
            </div>
        </div>
    </div>
    `;
}

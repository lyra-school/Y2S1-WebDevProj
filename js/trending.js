// generates the What's Hot section -- needs live server
(function () {
    readJson();
})();

async function readJson() {
    const jsonFile = await fetch('./data/products.min.json');
    const output = await jsonFile.json();
    generateTrends(output);
}

/* I originally wanted this function to use the (currently unused)
    salesInLast30Days figure in each JSON item and generate a
    catalogue based on that.

    However, it was growing too complicated for the scope of the
    project. Instead, the generator function is fed a bunch of
    preset items and calls the section creator from that.
*/
function generateTrends(jsonFile) {
    divCreator(jsonFile, 0, "addToCart()");
    divCreator(jsonFile, 8, "addToCart9()");
    divCreator(jsonFile, 9, "addToCart10()");
    divCreator(jsonFile, 3, "addToCart4()");
}

function divCreator(jsonFile, number, onclickAttrib) {
    const path = document.getElementById('hot-section');

    let divContainer = document.createElement("div");
    divContainer.classList.add("container-fluid", "col-md-3");

    let divMain = document.createElement("div");
    divMain.classList.add("row", "align-items-start");
    

    let img = document.createElement("img");
    img.setAttribute("src", jsonFile.products[number].imageRelLink);
    img.classList.add("col-12", "img-fluid");
    divMain.appendChild(img);

    let descCol = document.createElement("div");
    descCol.classList.add("col-6", "text-start", "text-secondary");

    let p1 = document.createElement("p");
    p1.innerHTML=jsonFile.products[number].title;
    p1.classList.add("text-dark");

    let p2 = document.createElement("p");
    p2.innerHTML=jsonFile.products[number].desc;

    descCol.appendChild(p1);
    descCol.appendChild(p2);
    divMain.appendChild(descCol);

    let priceCol = document.createElement("div");
    priceCol.classList.add("col-6", "text-end", "text-dark", "text-wrap");

    let p3 = document.createElement("p");
    p3.innerHTML="€" + jsonFile.products[number].price;

    let cartBtn = document.createElement("button");
    cartBtn.classList.add("btn", "btn-dark");
    cartBtn.setAttribute("onclick", onclickAttrib);
    cartBtn.innerHTML="Add to cart";

    priceCol.appendChild(p3);
    priceCol.appendChild(cartBtn);
    divMain.appendChild(priceCol);

    divContainer.appendChild(divMain);
    path.appendChild(divContainer);
}
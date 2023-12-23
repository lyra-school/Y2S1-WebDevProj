/* generate the catalogue by reading from the JSON file based on
   products requested
   
   based on trending.js -- needs live server
*/

(function () {
    readJson();
})();

async function readJson() {
    const jsonFile = await fetch('./data/products.min.json');
    const output = await jsonFile.json();
    generateDivs(output);
}

function generateDivs(jsonFile) {
    const path = document.getElementById('ruby');
    const path2 = document.getElementById('sapphire');
    divCreator(jsonFile, 5, path2, "addToCart6()");
    divCreator(jsonFile, 6, path2, "addToCart7()");
    divCreator(jsonFile, 7, path2, "addToCart8()");
    divCreator(jsonFile, 8, path2, "addToCart9()");
    divCreator(jsonFile, 1, path, "addToCart2()");
    divCreator(jsonFile, 2, path, "addToCart3()");
    divCreator(jsonFile, 3, path, "addToCart4()");
    divCreator(jsonFile, 4, path, "addToCart5()");
}

function divCreator(jsonFile, number, path, onclickAttrib) {
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
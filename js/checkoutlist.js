(function() {
    readJson();
})();

// read local json -- website must be in a live server -- and call population fnc 
async function readJson() {
    const jsonFile = await fetch('./data/products.min.json');
    const output = await jsonFile.json();
    const checkoutList = document.getElementById('checkoutList');
    listArticles(output, 0, checkoutList, 'id1');
    listArticles(output, 1, checkoutList, 'id2');
    listArticles(output, 2, checkoutList, 'id3');
    listArticles(output, 3, checkoutList, 'id4');
    listArticles(output, 4, checkoutList, 'id5');
    listArticles(output, 5, checkoutList, 'id6');
    listArticles(output, 6, checkoutList, 'id7');
    listArticles(output, 7, checkoutList, 'id8');
    listArticles(output, 8, checkoutList, 'id9');
    listArticles(output, 9, checkoutList, 'id10');
}

// populate checkout with the articles that the customer wants to purchase
function listArticles(jsonOutput, number, parentElement, localStorVar) {
    if(localStorage.getItem(localStorVar) == null) {
        return;
    }
    const par = document.createElement('p');
    par.classList.add("mt-0", "mb-0", "ms-2");

    const prodTitle = jsonOutput.products[number].title;

    par.innerHTML=prodTitle + "......." + localStorage.getItem(localStorVar);

    parentElement.appendChild(par);
}
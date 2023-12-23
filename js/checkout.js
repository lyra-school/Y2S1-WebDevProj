var checkout = document.getElementById('buy-now');

// add a listener so that we run this code and preventdefault for submit
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    // verify details, show one of three messages depending on the basket/detail state
    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        if(localStorage.getItem('checkout') == 0) {
            var element = document.getElementById("payment-failure");
            element.classList.add("d-none");
            var element = document.getElementById("payment-failure-2");
            element.classList.remove("d-none");
            var element = document.getElementById("payment-success");
            element.classList.add("d-none");
            return;
        }
        var element = document.getElementById("payment-failure");
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure-2");
        element.classList.add("d-none");
        var element = document.getElementById("payment-success");
        element.classList.remove("d-none");
        // now set cart total to zero
        var total=0;
        // makes sure that when we goto another page the total is zero
        // set all other localStorage vars to 0
        localStorage.setItem('checkout',total);
        localStorage.setItem('id1', 0);
        localStorage.setItem('id2', 0);
        localStorage.setItem('id3', 0);
        localStorage.setItem('id4', 0);
        localStorage.setItem('id5', 0);
        localStorage.setItem('id6', 0);
        localStorage.setItem('id7', 0);
        localStorage.setItem('id8', 0);
        localStorage.setItem('id9', 0);
        localStorage.setItem('id10', 0);
    } else {
        var element = document.getElementById("payment-success");
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure-2");
        element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        element.classList.remove("d-none");
   
    }
    return false;  

    
    
})



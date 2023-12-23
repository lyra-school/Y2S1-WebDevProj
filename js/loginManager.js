// set the checkout figure
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;


// run to update login
var logout = document.getElementById('loginlogout');
logout.addEventListener("click", Logout);

function Logout() {
    // if user is logged in then log them out -- formerly provided page redirects don't work on Firefox
    // the redirects are instead handled by the checkLoginStatus() fnc
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
    }
}

// check if user is logged in or logged out
checkLoginStatus()

function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    var loginLink = document.querySelector('#loginlogout');
    var checkoutLink = document.getElementById('checkoutBtn');
    if (loggedin==1) {
        // change the text from Login to Logout
        // if user logging out = redirect to index.html
        loginLink.innerHTML="Logout";
        loginLink.setAttribute("href", "index.html");
        checkoutLink.setAttribute("href", "checkout.html");
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        // if user not logged in = redirect to login.html (both on login and checkout)
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        loginLink.innerHTML="Login"; 
        loginLink.setAttribute("href", "login.html");
        checkoutLink.setAttribute("href", "login.html");
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}





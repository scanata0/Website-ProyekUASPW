window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    document.getElementById("a").innerHTML = "<h1> Thank you for donating, " + username + "!</h1>";
};

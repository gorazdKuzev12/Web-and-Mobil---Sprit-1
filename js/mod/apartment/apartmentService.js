
async function getApartments() {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'http://localhost:4500/appartments', false);
    xhttp.send(null);
    return xhttp.responseText;
}

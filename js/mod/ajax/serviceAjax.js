// import axios from 'axios';
// import enviroment from 'config/env/local';

// export const serviceAjax = new class ServiceAjax {
//     serviceUrl = enviroment.serviceHostname;
//     serviceEndpoint;

//     get(url) {
//         return axios.get(this.serviceUrl + url ?? '')
//             .then((response) => response.data)
//             .catch((error) => console.error(error));
//     }
// }()

function get(url = 'http://localhost:4500') {
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send(null);
    return xhttp.responseText;
}
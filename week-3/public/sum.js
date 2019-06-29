// Week 3 - Assign 3
// 1. create XMLHTTP Request object
let xhr = new XMLHttpRequest();
// 2. create callback function
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.querySelector("#ajax").innerHTML = this.responseText;
        }
    };
// 3. open a request
function sendAJAX() {
    let numberInput = document.getElementById("numberInput").value
    let url = "/getData";
    if (numberInput !== '') {
        url += "?number=";
     }
    xhr.open("GET", url + numberInput);
    // you make an open req per send
    // 4. send a request
    xhr.send();
};
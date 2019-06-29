// Week 3 - Assign 4
// 1. create XMLHTTP Request object
let xhr = new XMLHttpRequest();
// 2. create callback function
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.querySelector("#ajax").innerHTML = this.responseText;
        }
    };
// 3. open a request
function trackName() {
    let name = document.getElementById("getName").value
    let url = "/trackName";
    if (name !== '') {
        url += "?name=" + name;
    };
    xhr.open("GET", url);
    // you make an open req per send
    // 4. send a request
    xhr.send();
};
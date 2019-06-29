// Week 3 - Assign 4

// 1. create XMLHTTP Request object
let xhr = new XMLHttpRequest();
// 2. create callback function
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.querySelector("#ajax").innerHTML = this.responseText;
    }
};
// @todo parse cookies to return name value
// currently name=string
// https://firstdoit.com/quick-tip-one-liner-cookie-read-c695ecb4fe59
let allCookies = document.cookie;
if (allCookies !== "") {
    document.querySelector("#ajax").innerHTML = allCookies;
};

// 3. open a request
function trackName() {
    // @todo check cookies for names
    let user = document.getElementById("getName").value
    let url = "/trackName";
    if (user !== '') {
        url += "?name=" + user;
    };
    xhr.open("GET", url);
    // you make an open req per send
    // 4. send a request
    xhr.send();
};
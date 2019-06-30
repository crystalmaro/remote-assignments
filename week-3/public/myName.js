// Week 3 - Assign 4

var dc = document.cookie;
var begin = dc.indexOf('name=')
if (begin != -1) {
    var name = dc.substring(begin+5)
    document.getElementById("ajax").innerHTML = name;
    document.getElementById("nameBox").style.display = "none";
    // hide input box if 
}
// 3. open a request when button is clicked
function trackName() {
    // 1. create XMLHTTP Request object
    let xhr = new XMLHttpRequest();
    // 2. create callback function
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //both window.locaiton and location work below
            location.href = this.responseURL;
            // location.reload();
        }
    };
    let user = document.getElementById("getName").value
    let url = "/trackName";
    if (user !== '') {
        url += "?name=" + user;
    };
    xhr.open("GET", url);
    // 4. send a request
    xhr.send();
};
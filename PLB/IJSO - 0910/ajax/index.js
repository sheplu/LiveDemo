let xhr;
let div = document.querySelector('#ajax');
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
} else {
    alert('Perhaps your browser does not support XMLHttpRequest?');
}

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == 200) {
        console.log(xhr);
        let tmp = JSON.parse(xhr.responseText)
        div.innerHTML = tmp.id;
    }
    else {
        console.log(xhr.readyState);
    }
};

xhr.open('GET', 'http://api.github.com/users/sheplu');
xhr.send(null);
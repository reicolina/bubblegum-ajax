var bgAjax = function() {
  var xhr = new XMLHttpRequest();
  return function(method, url, payload, callback, isCrossDomain ) {
    if (isCrossDomain && xhr.withCredentials === undefined) {
      // For cross-origin requests in IE8 and IE9
      xhr = new XDomainRequest();
    }
    xhr.open( method, url );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    if (payload) {
      xhr.send(JSON.stringify(payload));
    } else {
      xhr.send();
    }
  };
}();

/*
// test a PUT request using cross origin (CORS)
bgAjax('put', 'http://xxx.com', {name: 'rei', age: 37}, function(data) {
    console.log(data);
}, true);
*/

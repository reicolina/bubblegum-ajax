var bgAjax = function() {
  var xhr = new XMLHttpRequest();
  return function(method, url, payload, callback, isCrossOrigin ) {
    var ieCORS = isCrossOrigin && (xhr.withCredentials === undefined);
    if (ieCORS) {
      // For cross-origin requests in IE8 and IE9
      xhr = new XDomainRequest();
    }
    xhr.open( method, url );
    if (ieCORS) {
      // XDomainRequest does not support custom headers
      xhr.setRequestHeader('Content-Type', 'application/json');
    }
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

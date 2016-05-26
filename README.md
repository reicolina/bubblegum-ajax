# bubblegum-ajax
A cross browser helper for XHR ajax requests with support for Cross Origin Resource Sharing (CORS).
Supports IE8+

## Usage
Copy the contents of `bubblegum-ajax.js` into your code, and then:
```
// test a POST request using cross origin (CORS)
bgAjax('post', 'http://xxx.com', {name: 'rei', age: 37}, function(data) {
    console.log(data);
}, true);
```

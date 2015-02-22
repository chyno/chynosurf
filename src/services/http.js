// A-> $http function is implemented in order to follow the standard Adapter pattern
var $http = function(url){
 
  // A small example of object
  var core = {
    
    // Method that performs the ajax request
    ajax : function(method, url, args){
      
          // Establishing a promise in return
          return new Promise(function(resolve, reject) {
            
            // Instantiates the XMLHttpRequest
            var client = new XMLHttpRequest();
            var uri = '';
            if((args != undefined) && (method == 'POST' || method == 'PUT') {
              for (key in args) {
                uri += encodeURIComponent(key) + '=' + encodeURIComponent(escape(args[key])) + '&';
              }
              client.open(method, url + '?' + uri, true);
            } else {
              client.open(method, url, true);
            }
            client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            client.setRequestHeader("Cache-Control", "no-cache");
            client.onreadystatechange = function(){
              if(this.readyState == 4){
                if(this.status == 200){
                  // Performs the function "resolve" the case this.status is equal to 200
                  resolve(JSON.parse(this.response));
                } else{
                  // Performs the function "reject" the case is different this.status 200
                  reject({"error":this.statusText});
                }
              }
            };
            client.send(uri);
            
          });
        }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};
// End A
System.register([], function (_export) {
  "use strict";

  var $http;
  return {
    setters: [],
    execute: function () {
      $http = function (url) {
        var core = {
          ajax: function (method, url, args) {
            return new Promise(function (resolve, reject) {
              var client = new XMLHttpRequest();
              var uri = "";
              if (args != undefined && (method == "POST" || method == "PUT")) {
                for (key in args) {
                  uri += encodeURIComponent(key) + "=" + encodeURIComponent(escape(args[key])) + "&";
                }
                client.open(method, url + "?" + uri, true);
              } else {
                client.open(method, url, true);
              }
              client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              client.setRequestHeader("Cache-Control", "no-cache");
              client.onreadystatechange = function () {
                if (this.readyState == 4) {
                  if (this.status == 200) {
                    resolve(JSON.parse(this.response));
                  } else {
                    reject({ error: this.statusText });
                  }
                }
              };
              client.send(uri);
            });
          }
        };

        return {
          get: function (args) {
            return core.ajax("GET", url, args);
          },
          post: function (args) {
            return core.ajax("POST", url, args);
          },
          put: function (args) {
            return core.ajax("PUT", url, args);
          },
          "delete": function (args) {
            return core.ajax("DELETE", url, args);
          }
        };
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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
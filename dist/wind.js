System.register(["./services/wind-service"], function (_export) {
  "use strict";

  var WindService, _prototypeProperties, _classCallCheck, url, Wind, chynohttp;
  return {
    setters: [function (_servicesWindService) {
      WindService = _servicesWindService.WindService;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      Wind = _export("Wind", (function () {
        function Wind(service) {
          _classCallCheck(this, Wind);

          this.heading = "Wind";
          this.readings = [];
          this.service = service;
        }

        _prototypeProperties(Wind, {
          inject: {
            value: function inject() {
              return [WindService];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              return chynohttp(url).get().then(function (response) {
                console.log("response :" + response);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Wind;
      })());
      chynohttp = function (url) {
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
              client.setRequestHeader("Host", "tidesandcurrents.noaa.gov");
              client.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
              client.setRequestHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,DELETE");
              client.setRequestHeader("Access-Control-Allow-Origin", "*");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BS1EsV0FBVyx5Q0FEZixHQUFHLEVBR08sSUFBSSxFQXVCZCxTQUFTOzs7QUF6QkwsaUJBQVcsd0JBQVgsV0FBVzs7Ozs7OztBQURmLFNBQUcsR0FBRyxxTUFBcU07QUFHak0sVUFBSTtBQUdMLGlCQUhDLElBQUksQ0FHSixPQUFPO2dDQUhQLElBQUk7O0FBSWQsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVBXLElBQUk7QUFFVCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFPekMsa0JBQVE7bUJBQUEsb0JBQUU7QUFNUixxQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUN2QztBQUNPLHVCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztlQUMzQyxDQUFDLENBQUM7YUFDTjs7Ozs7O2VBbkJXLElBQUk7O0FBdUJkLGVBQVMsR0FBRyxVQUFTLEdBQUcsRUFBQztBQUczQixZQUFJLElBQUksR0FBRztBQUdULGNBQUksRUFBRyxVQUFTLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDO0FBRzVCLG1CQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUczQyxrQkFBSSxNQUFNLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUNsQyxrQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2Isa0JBQUcsQUFBQyxJQUFJLElBQUksU0FBUyxLQUFNLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQSxBQUFDLEVBQUU7QUFDL0QscUJBQUssR0FBRyxJQUFJLElBQUksRUFBRTtBQUNoQixxQkFBRyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3BGO0FBQ0Qsc0JBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2VBQzVDLE1BQU07QUFDTCxzQkFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2VBQ2hDO0FBRUQsb0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztBQUM3RCxvQkFBTSxDQUFDLGdCQUFnQixDQUFDLDhCQUE4QixFQUFFLCtEQUErRCxDQUFDLENBQUM7QUFDekgsb0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3ZGLG9CQUFNLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUQsb0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztBQUM3RSxvQkFBTSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRCxvQkFBTSxDQUFDLGtCQUFrQixHQUFHLFlBQVU7QUFDcEMsb0JBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUM7QUFDdEIsc0JBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUM7QUFFcEIsMkJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO21CQUNwQyxNQUFLO0FBRUosMEJBQU0sQ0FBQyxFQUFDLE9BQVEsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7bUJBQ25DO2lCQUNGO2VBQ0YsQ0FBQztBQUNGLG9CQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRWxCLENBQUMsQ0FBQztXQUNKO1NBQ04sQ0FBQzs7QUFHRixlQUFPO0FBQ0wsZUFBUSxVQUFTLElBQUksRUFBRTtBQUNyQixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDcEM7QUFDRCxnQkFBUyxVQUFTLElBQUksRUFBRTtBQUN0QixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDckM7QUFDRCxlQUFRLFVBQVMsSUFBSSxFQUFFO0FBQ3JCLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztXQUNwQztBQUNELGtCQUFRLEVBQUcsVUFBUyxJQUFJLEVBQUU7QUFDeEIsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1dBQ3ZDO1NBQ0YsQ0FBQztPQUNIIiwiZmlsZSI6IndpbmQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==
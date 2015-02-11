System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, url, Wind;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      Wind = _export("Wind", (function () {
        function Wind(http) {
          _classCallCheck(this, Wind);

          this.heading = "Wind Information";
          this.readings = [];
          this.http = http;
        }

        _prototypeProperties(Wind, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.http.jsonp(url).then(function (response) {
                var data = response.content;
                if (data) {
                  _this.readings = [];
                }
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Wind;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FLZCxHQUFHLEVBRU0sSUFBSTs7O0FBUFQsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUtkLFNBQUcsR0FBRyxxTUFBcU07QUFFbE0sVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJO2dDQUZMLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyxjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7NkJBTlUsSUFBSTtBQUNSLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQU94QyxrQkFBUTttQkFBQSxvQkFBRTs7QUFDUixxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDM0Msb0JBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDNUIsb0JBQUksSUFBSSxFQUNSO0FBQ0Usd0JBQUssUUFBUSxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7ZUFFRixDQUFDLENBQUM7YUFDSjs7Ozs7O2VBakJVLElBQUkiLCJmaWxlIjoid2luZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
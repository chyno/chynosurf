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

          this.heading = "Wind";


          this.readings = [];
          this.http = http;
          this.http.defaultRequestHeaders.add("Access-Control-Allow-Origin", "*");
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
              return this.http.get(url).then(function (response) {
                _this.readings = response.content.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQ1EsVUFBVSx5Q0FHZCxHQUFHLEVBRU0sSUFBSTs7O0FBTFQsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUdkLFNBQUcsR0FBRyxxTUFBcU07QUFFbE0sVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJO2dDQUZMLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7OztBQUd0QixjQUFJLENBQUMsUUFBUSxHQUFJLEVBQUUsQ0FBQztBQUNwQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUN4RTs7NkJBVFUsSUFBSTtBQUNSLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQVV4QyxrQkFBUTttQkFBQSxvQkFBRTs7QUFDUixxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDekMsc0JBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2VBQ3ZDLENBQUMsQ0FBQzthQUNKOzs7Ozs7ZUFmVSxJQUFJIiwiZmlsZSI6IndpbmQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==
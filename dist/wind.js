System.register(["./services/wind-service", "aurelia-http-client"], function (_export) {
  "use strict";

  var WindService, HttpClient, _prototypeProperties, _classCallCheck, url, Wind;
  return {
    setters: [function (_servicesWindService) {
      WindService = _servicesWindService.WindService;
    }, function (_aureliaHttpClient) {
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
          this.service = new WindService();
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
              this.readings = this.service.readings();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsV0FBVyxFQUNYLFVBQVUseUNBR2QsR0FBRyxFQUVNLElBQUk7OztBQU5ULGlCQUFXLHdCQUFYLFdBQVc7O0FBQ1gsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUdkLFNBQUcsR0FBRyxxTUFBcU07QUFFbE0sVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJO2dDQUZMLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ2xDOzs2QkFOVSxJQUFJO0FBQ1IsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBT3hDLGtCQUFRO21CQUFBLG9CQUFFO0FBRVAsa0JBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN6Qzs7Ozs7O2VBWFEsSUFBSSIsImZpbGUiOiJ3aW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
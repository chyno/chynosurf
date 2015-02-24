System.register(["./services/wind-service"], function (_export) {
  "use strict";

  var WindService, _prototypeProperties, _classCallCheck, url, Wind;
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
              var _this = this;


              return this.service.readings().then(function (data) {
                _this.readings = data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BS1EsV0FBVyx5Q0FEZixHQUFHLEVBR08sSUFBSTs7O0FBRlYsaUJBQVcsd0JBQVgsV0FBVzs7Ozs7OztBQURmLFNBQUcsR0FBRyxxTUFBcU07QUFHak0sVUFBSTtBQUdMLGlCQUhDLElBQUksQ0FHSixPQUFPO2dDQUhQLElBQUk7O0FBSWQsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVBXLElBQUk7QUFFVCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFPekMsa0JBQVE7bUJBQUEsb0JBQUU7Ozs7QUFFVCxxQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN6QyxzQkFBSyxRQUFRLEdBQUcsSUFBSSxDQUFDO2VBQ3RCLENBQUMsQ0FBQzs7YUFHSjs7Ozs7O2VBaEJXLElBQUkiLCJmaWxlIjoid2luZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, url, WindService;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      WindService = _export("WindService", (function () {
        function WindService(http) {
          _classCallCheck(this, WindService);

          this.http = http;
        }

        _prototypeProperties(WindService, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          readings: {
            value: function readings() {
              return this.http.get(url);
            },
            writable: true,
            configurable: true
          }
        });

        return WindService;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dpbmQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLHlDQUVkLEdBQUcsRUFFTSxXQUFXOzs7QUFKaEIsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUVkLFNBQUcsR0FBRyxxTUFBcU07QUFFbE0saUJBQVc7QUFHWCxpQkFIQSxXQUFXLENBR1YsSUFBSTtnQ0FITCxXQUFXOztBQUluQixjQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztTQUNwQjs7NkJBTFUsV0FBVztBQUVmLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7OztBQUt6QyxrQkFBUTttQkFBQSxvQkFDUjtBQUNFLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBZ0IzQjs7Ozs7O2VBekJXLFdBQVciLCJmaWxlIjoic2VydmljZXMvd2luZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
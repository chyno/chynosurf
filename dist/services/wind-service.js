System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, url, WindService;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      WindService = _export("WindService", (function () {
        function WindService(http) {
          _classCallCheck(this, WindService);

          this.http = http;
        }

        _prototypeProperties(WindService, null, {
          readings: {
            value: function readings() {


              return new Promise(function (resolve, reject) {
                var res = [1, 2, 3, 4, 5].map(function (id) {
                  return {
                    id: id,
                    speed: "20",
                    direction: "SW",
                    gusts: "30"
                  };
                });
                resolve(res);
              });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dpbmQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBRUksR0FBRyxFQUVNLFdBQVc7Ozs7Ozs7O0FBRnBCLFNBQUcsR0FBRyxxTUFBcU07QUFFbE0saUJBQVc7QUFHWCxpQkFIQSxXQUFXLENBR1YsSUFBSTtnQ0FITCxXQUFXOztBQUluQixjQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQztTQUNwQjs7NkJBTFUsV0FBVztBQU92QixrQkFBUTttQkFBQSxvQkFDUjs7O0FBSUMscUJBQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQzVDLG9CQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLEVBQUk7QUFDaEMseUJBQU87QUFDTixzQkFBRSxFQUFHLEVBQUU7QUFDUCx5QkFBSyxFQUFHLElBQUk7QUFDWiw2QkFBUyxFQUFHLElBQUk7QUFDaEIseUJBQUssRUFBRyxJQUFJO21CQUNaLENBQUE7aUJBQ0csQ0FBQyxDQUFDO0FBQ04sdUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNiLENBQUMsQ0FBQzs7YUFHSDs7Ozs7O2VBekJXLFdBQVciLCJmaWxlIjoic2VydmljZXMvd2luZC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
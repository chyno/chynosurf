System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, WindService;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      WindService = _export("WindService", (function () {
        function WindService() {
          _classCallCheck(this, WindService);
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

                if (res) resolve(res);else reject("could not get data");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dpbmQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBSWEsV0FBVzs7Ozs7Ozs7QUFBWCxpQkFBVztBQUdYLGlCQUhBLFdBQVc7Z0NBQVgsV0FBVztTQUtyQjs7NkJBTFUsV0FBVztBQU92QixrQkFBUTttQkFBQSxvQkFDUjtBQUVDLHFCQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUM1QyxvQkFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxFQUFJO0FBQ2hDLHlCQUFPO0FBQ04sc0JBQUUsRUFBRyxFQUFFO0FBQ1AseUJBQUssRUFBRyxJQUFJO0FBQ1osNkJBQVMsRUFBRyxJQUFJO0FBQ2hCLHlCQUFLLEVBQUcsSUFBSTttQkFDWixDQUFBO2lCQUNHLENBQUMsQ0FBQzs7QUFFSCxvQkFBSSxHQUFHLEVBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBLEtBRWYsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7ZUFDOUIsQ0FBQyxDQUFDOzthQUdIOzs7Ozs7ZUEzQlcsV0FBVyIsImZpbGUiOiJzZXJ2aWNlcy93aW5kLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==
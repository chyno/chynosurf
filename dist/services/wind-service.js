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
              return [1, 2, 3, 4, 5].map(function (id) {
                return {
                  id: id,
                  speed: "20",
                  direction: "SW",
                  gusts: "30"

                };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3dpbmQtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsV0FBVzs7Ozs7Ozs7QUFBWCxpQkFBVztpQkFBWCxXQUFXO2dDQUFYLFdBQVc7Ozs2QkFBWCxXQUFXO0FBRXZCLGtCQUFRO21CQUFBLG9CQUNSO0FBQ0MscUJBQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxFQUFJO0FBQzVCLHVCQUFPO0FBQ04sb0JBQUUsRUFBRyxFQUFFO0FBQ1AsdUJBQUssRUFBRyxJQUFJO0FBQ1osMkJBQVMsRUFBRyxJQUFJO0FBQ2hCLHVCQUFLLEVBQUcsSUFBSTs7aUJBRVosQ0FBQTtlQUVELENBQUMsQ0FBQzthQUVIOzs7Ozs7ZUFmVyxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL3dpbmQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
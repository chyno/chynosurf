System.register(["./services/wind-service"], function (_export) {
  "use strict";

  var WindService, _prototypeProperties, _classCallCheck, Wind;
  return {
    setters: [function (_servicesWindService) {
      WindService = _servicesWindService.WindService;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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


              this.service.readings().then(function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BTVEsV0FBVyx5Q0FFTCxJQUFJOzs7QUFGVixpQkFBVyx3QkFBWCxXQUFXOzs7Ozs7O0FBRUwsVUFBSTtBQUdMLGlCQUhDLElBQUksQ0FHSixPQUFPO2dDQUhQLElBQUk7O0FBSWQsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVBXLElBQUk7QUFFVCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFPekMsa0JBQVE7bUJBQUEsb0JBQUU7Ozs7QUFFVixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDakMsc0JBQUssUUFBUSxHQUFHLElBQUksQ0FBQztlQUN0QixDQUFDLENBQUM7YUFDSjs7Ozs7O2VBZFcsSUFBSSIsImZpbGUiOiJ3aW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
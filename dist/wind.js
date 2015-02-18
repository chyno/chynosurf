System.register(["./services/wind-service", "aurelia-http-client"], function (_export) {
  "use strict";

  var WindService, HttpClient, _prototypeProperties, _classCallCheck, Wind;
  return {
    setters: [function (_servicesWindService) {
      WindService = _servicesWindService.WindService;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsV0FBVyxFQUNYLFVBQVUseUNBSUwsSUFBSTs7O0FBTFQsaUJBQVcsd0JBQVgsV0FBVzs7QUFDWCxnQkFBVSxzQkFBVixVQUFVOzs7Ozs7O0FBSUwsVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJO2dDQUZMLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ2xDOzs2QkFOVSxJQUFJO0FBQ1IsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBT3hDLGtCQUFRO21CQUFBLG9CQUFFOzs7O0FBRVYsa0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ2pDLHNCQUFLLFFBQVEsR0FBRyxJQUFJLENBQUM7ZUFDdEIsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQWJVLElBQUkiLCJmaWxlIjoid2luZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
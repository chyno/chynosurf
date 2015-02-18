<<<<<<< HEAD
System.register([], function (_export) {
  "use strict";

  var _classCallCheck, url, Wind;
  return {
    setters: [],
=======
System.register(["./services/wind-service"], function (_export) {
  "use strict";

  var WindService, _prototypeProperties, _classCallCheck, Wind;
  return {
    setters: [function (_servicesWindService) {
      WindService = _servicesWindService.WindService;
    }],
>>>>>>> e8a8bfb87083cba561f5989bc365a0c95c29de07
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

<<<<<<< HEAD
      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      Wind = _export("Wind", function Wind() {
        _classCallCheck(this, Wind);
=======
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
>>>>>>> e8a8bfb87083cba561f5989bc365a0c95c29de07

        this.heading = "Wind Information";
        this.readings = [];
      });
    }
  };
});
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUtJLEdBQUcsRUFFTSxJQUFJOzs7Ozs7QUFGYixTQUFHLEdBQUcscU1BQXFNO0FBRWxNLFVBQUksbUJBRUosU0FGQSxJQUFJOzhCQUFKLElBQUk7O0FBR2IsWUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyxZQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztPQUVwQiIsImZpbGUiOiJ3aW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsV0FBVyx5Q0FJTixJQUFJOzs7QUFKVCxpQkFBVyx3QkFBWCxXQUFXOzs7Ozs7O0FBSU4sVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJO2dDQUZMLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLFFBQVEsR0FBSSxFQUFFLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ2xDOzs2QkFOVSxJQUFJO0FBQ1IsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBT3hDLGtCQUFRO21CQUFBLG9CQUFFOzs7O0FBRVYsa0JBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ2pDLHNCQUFLLFFBQVEsR0FBRyxJQUFJLENBQUM7ZUFDdEIsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQWJVLElBQUkiLCJmaWxlIjoid2luZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
>>>>>>> e8a8bfb87083cba561f5989bc365a0c95c29de07

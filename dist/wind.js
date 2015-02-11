System.register([], function (_export) {
  "use strict";

  var _classCallCheck, url, Wind;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      Wind = _export("Wind", function Wind() {
        _classCallCheck(this, Wind);

        this.heading = "Wind Information";
        this.readings = [];
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUtJLEdBQUcsRUFFTSxJQUFJOzs7Ozs7QUFGYixTQUFHLEdBQUcscU1BQXFNO0FBRWxNLFVBQUksbUJBRUosU0FGQSxJQUFJOzhCQUFKLElBQUk7O0FBR2IsWUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyxZQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztPQUVwQiIsImZpbGUiOiJ3aW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
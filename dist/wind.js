System.register([], function (_export) {
  "use strict";

  var _classCallCheck, Wind, ReadingData;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Wind = _export("Wind", function Wind(http) {
        _classCallCheck(this, Wind);

        this.heading = "Wind";
        this.readings = [{ speed: "20", gust: "30", direction: "SW" }, { speed: "22", gust: "33", direction: "SW" }];
        this.http = http;
      });
      ReadingData = _export("ReadingData", function ReadingData(speed, gust, direction) {
        _classCallCheck(this, ReadingData);

        this.speed = speed;
        this.gust = gust;
        this.direction = durection;
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQU1hLElBQUksRUFVSixXQUFXOzs7Ozs7QUFWWCxVQUFJLG1CQUVKLFNBRkEsSUFBSSxDQUVILElBQUk7OEJBRkwsSUFBSTs7QUFHYixZQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixZQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3JHLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQ2xCO0FBSVUsaUJBQVcsMEJBRVosU0FGQyxXQUFXLENBRVgsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTOzhCQUZ0QixXQUFXOztBQUl0QixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtPQUMxQiIsImZpbGUiOiJ3aW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
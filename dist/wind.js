System.register([], function (_export) {
  "use strict";

  var _classCallCheck, url, Wind, ReadingData;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json";
      Wind = _export("Wind", function Wind(http) {
        _classCallCheck(this, Wind);

        this.heading = "Wind";
        var noaastring = "{\"metadata\":{\"id\":\"8454000\",\"name\":\"Providence\",\"lat\":\"41.8071\",\"lon\":\"-71.4012\"}, \"data\": [{\"t\":\"2013-08-08 15:00\", \"s\":\"10.89\", \"d\":\"236.00\", \"dr\":\"SW\", \"g\":\"15.94\", \"f\":\"0,0\"},{\"t\":\"2013-08-08 15:06\", \"s\":\"6.80\", \"d\":\"222.00\", \"dr\":\"SW\", \"g\":\"11.86\", \"f\":\"0,0\"}]}";
        var noaadata = JSON.parse(noaastring);

        var data = noaadata.data.map(function (d) {
          return { speed: d.s, gust: d.g, direction: d.dr };
        });


        this.readings = data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUlJLEdBQUcsRUFFTSxJQUFJLEVBa0JKLFdBQVc7Ozs7OztBQXBCcEIsU0FBRyxHQUFHLHFNQUFxTTtBQUVsTSxVQUFJLG1CQUVKLFNBRkEsSUFBSSxDQUVILElBQUk7OEJBRkwsSUFBSTs7QUFHYixZQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUNyQixZQUFJLFVBQVUsR0FBRyxnVkFBNFEsQ0FBQztBQUM5UixZQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUVyQyxZQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNaLGlCQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztTQUN0RSxDQUFDLENBQUM7OztBQUdiLFlBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQ2xCO0FBSVUsaUJBQVcsMEJBRVosU0FGQyxXQUFXLENBRVgsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTOzhCQUZ0QixXQUFXOztBQUl0QixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtPQUMxQiIsImZpbGUiOiJ3aW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
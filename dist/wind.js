System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, Wind;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Wind = _export("Wind", (function () {
        function Wind(http) {
          _classCallCheck(this, Wind);

          this.heading = "Wind";
          this.readings = ["20", "30"];
          this.http = http;
        }

        _prototypeProperties(Wind, null, {
          canDeactivate: {
            value: function canDeactivate() {
              return confirm("Are you sure you want to leave?");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQU1hLElBQUk7Ozs7Ozs7O0FBQUosVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJO2dDQUZMLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3QixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7NkJBTlUsSUFBSTtBQVNmLHVCQUFhO21CQUFBLHlCQUFFO0FBQ2IscUJBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7YUFDbkQ7Ozs7OztlQVhVLElBQUkiLCJmaWxlIjoid2luZC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9
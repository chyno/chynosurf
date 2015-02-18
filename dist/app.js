System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }, { route: "wind", moduleId: "wind", nav: true, title: "Wind" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());


      (function () {
        var run = function (generator) {
          var secuence;
          var process = function (result) {
            result.value.then(function (value) {
              if (!result.done) {
                process(sequence.next(value));
              }
            });
          };
          sequence = generator();
          var next = sequence.next();
          process(next);
        };
        window.asynchP = {
          run: run
        };
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHlDQUVELEdBQUc7OztBQUZSLFlBQU0sa0JBQU4sTUFBTTs7Ozs7OztBQUVELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTTtnQ0FGUCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFHLFFBQVEsRUFBRSxTQUFTLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ2hGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsUUFBUSxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDL0QsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLEVBQ3JGLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxDQUU3RCxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7NkJBZFUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7Ozs7ZUFEekIsR0FBRzs7OztBQWlCaEIsQUFBQyxPQUFBLFlBQVc7QUFDVixZQUFJLEdBQUcsR0FBRyxVQUFTLFNBQVMsRUFBRTtBQUM3QixjQUFJLFFBQVEsQ0FBQztBQUNiLGNBQUksT0FBTyxHQUFHLFVBQVMsTUFBTSxFQUFFO0FBQzVCLGtCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUssRUFBRTtBQUNoQyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsdUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7ZUFDOUI7YUFDRixDQUFDLENBQUE7V0FDSixDQUFBO0FBQ0Qsa0JBQVEsR0FBRyxTQUFTLEVBQUUsQ0FBQztBQUN2QixjQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmLENBQUE7QUFDQSxjQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsYUFBRyxFQUFFLEdBQUc7U0FDVCxDQUFBO09BQ0YsQ0FBQSxFQUFFLENBQUUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=
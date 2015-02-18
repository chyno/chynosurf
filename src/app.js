import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: 'flickr',       nav: true },
        { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' },
        { route: 'wind', moduleId: 'wind', nav: true, title:'Wind' }

      ]);
    });
  }
}

(function() {
  var run = function(generator) {
   var secuence;
   var process = function(result) {
      result.value.then(function(value) {
        if (!result.done) {
          process(sequence.next(value))
        }
      })
   }
   sequence = generator();
   var next = sequence.next();
   process(next);
 }
  window.asynchP = {
    run :run
  }
}());

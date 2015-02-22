/*
{"metadata":{"id":"8454000","name":"Providence","lat":"41.8071","lon":"-71.4012"}, 
"data": [{"t":"2013-08-08 15:00", "s":"10.89", "d":"236.00", "dr":"SW", "g":"15.94", "f":"0,0"},{"t":"2013-08-08 15:06", "s":"6.80", "d":"222.00", "dr":"SW", "g":"11.86", "f":"0,0"}]}
*/
var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';
import {WindService} from './services/wind-service';

 export class Wind{

  static inject() { return [WindService]; }  
  constructor(service){
    this.heading = 'Wind';
     this.readings =  [];
    this.service = service;
  }

  activate(){
     /*
   return this.service.readings().then(data => {
      this.readings = data;
    });
*/
    return chynohttp(url).get().then(response =>
      {
             console.log('response :' + response);
      });
  }
}


var chynohttp = function(url){
 
  // A small example of object
  var core = {
    
    // Method that performs the ajax request
    ajax : function(method, url, args){
      
          // Establishing a promise in return
          return new Promise(function(resolve, reject) {
            
            // Instantiates the XMLHttpRequest
            var client = new XMLHttpRequest();
            var uri = '';
            if((args != undefined) && (method == 'POST' || method == 'PUT')) {
              for (key in args) {
                uri += encodeURIComponent(key) + '=' + encodeURIComponent(escape(args[key])) + '&';
              }
              client.open(method, url + '?' + uri, true);
            } else {
              client.open(method, url, true);
            }
            //client.defaults.useXDomain = true;
            client.setRequestHeader("Host", "tidesandcurrents.noaa.gov");
            client.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            client.setRequestHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
            client.setRequestHeader("Access-Control-Allow-Origin", "*");
            client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            client.setRequestHeader("Cache-Control", "no-cache");
            client.onreadystatechange = function(){
              if(this.readyState == 4){
                if(this.status == 200){
                  // Performs the function "resolve" the case this.status is equal to 200
                  resolve(JSON.parse(this.response));
                } else{
                  // Performs the function "reject" the case is different this.status 200
                  reject({"error":this.statusText});
                }
              }
            };
            client.send(uri);
            
          });
        }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};
// End A




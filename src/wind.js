import {HttpClient} from 'aurelia-http-client';
/*
{"metadata":{"id":"8454000","name":"Providence","lat":"41.8071","lon":"-71.4012"}, 
"data": [{"t":"2013-08-08 15:00", "s":"10.89", "d":"236.00", "dr":"SW", "g":"15.94", "f":"0,0"},{"t":"2013-08-08 15:06", "s":"6.80", "d":"222.00", "dr":"SW", "g":"11.86", "f":"0,0"}]}
*/
var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';

export class Wind{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'Wind Information';
    this.readings = [];
    this.http = http;
  }

  activate(){
    return this.http.jsonp(url).then(response => {
      var data = response.content.data;
      if (data)
      {
        this.readings = []; // data.map(new WindSetting(d.s,d.g,dr.sw));
      }
      
    });
  }
 
   
/*
  class WindSetting {
  constructor(speed, gusts, direction)
  {
    this.speed = speed;
    this.gusts = gusts;
    this.direction = direction;
  }
}
*/
}

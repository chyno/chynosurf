<<<<<<< HEAD
 
/*
{"metadata":{"id":"8454000","name":"Providence","lat":"41.8071","lon":"-71.4012"}, 
"data": [{"t":"2013-08-08 15:00", "s":"10.89", "d":"236.00", "dr":"SW", "g":"15.94", "f":"0,0"},{"t":"2013-08-08 15:06", "s":"6.80", "d":"222.00", "dr":"SW", "g":"11.86", "f":"0,0"}]}
*/
var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';

export class Wind {
  
  constructor(){
    this.heading = 'Wind Information';
    this.readings = [];
   
  }
}
 
=======
import {WindService} from './services/wind-service';
 


export class Wind{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'Wind';
     this.readings =  [];
    this.service = new WindService();
  }

  activate(){
     
  this.service.readings().then(data => {
      this.readings = data;
    });
  }  
}



   

    
>>>>>>> e8a8bfb87083cba561f5989bc365a0c95c29de07


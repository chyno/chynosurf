import {WindService} from './services/wind-service';
import {HttpClient} from 'aurelia-http-client';


var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';

export class Wind{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'Wind';
     this.readings =  [];
    this.service = new WindService();
  }

  activate(){
     
     this.readings = this.service.readings();
    }

  
}



   

    


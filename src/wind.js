



//var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';

export class Wind{
  
  constructor(http){
    this.heading = 'Wind';
    this.readings = ['20', '30'];
    this.http = http;
  }

  
  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}




   

    


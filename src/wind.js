



//var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';

export class Wind{
  
  constructor(http){
    this.heading = 'Wind';
    this.readings = [{ speed:'20', gust:'30', direction:'SW'}, { speed:'22', gust:'33', direction:'SW'}];
    this.http = http;
  }
  
}

export class ReadingData
{
	constructor(speed, gust, direction)
	{
		this.speed = speed;
		this.gust = gust;
		this.direction = durection
	}
}





   

    


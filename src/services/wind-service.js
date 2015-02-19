//import {HttpClient} from 'aurelia-http-client';

var url = 'http://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20130808%2015:00&end_date=20130808%2015:06&station=8454000&product=wind&units=english&time_zone=gmt&application=ports_screen&format=json';

export class WindService
{
 // static inject() { return [HttpClient]; }
  constructor(http){
     this.http =  http;
  }

	readings()
	{
		// return this.http.get(url);
		return new Promise(function(resolve, reject) {
			var res = [1,2,3,4,5].map(id => {
			return {
				id : id,
				speed : '20',
				direction : 'SW',
				gusts : '30'
			}
		    });
			resolve(res);
		});


	}
}
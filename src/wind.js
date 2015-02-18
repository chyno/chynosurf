import {WindService} from './services/wind-service';
import {HttpClient} from 'aurelia-http-client';



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



   

    


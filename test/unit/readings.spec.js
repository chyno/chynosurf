import {WindService} from '../../src/services/wind-service';



describe('the App module', (done) => {
  var service;
  service = new WindService();
  var data;
  service.readings().then(d => {
    this.data = d;
  });
 // beforeEach(() => { sut = new App(new RouterStub()); });
   done();
  it('contains a service object', () => {
    expect(service).toBeDefined(); 
  });

  it('contains data', () => {
   // expect(data).toBeDefined(); 
   expect(data).toBeDefined(); 
  });
  
  it('contains 5 records in the readings', () => {
   // expect(data).toBeDefined(); 
   expect(data.length).toEqual(5) ;
  });

it('contains id 1 in first item', () => {
   // expect(data).toBeDefined(); 
   expect(data[0].id).toEqual(1) ;
  });
 
  });
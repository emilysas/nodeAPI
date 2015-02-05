// var chai = require('chai');
// var expect = chai.expect;

var host = 'http://localhost:3000';

describe('Github API Simulation', function(){

  before(function(){
    casper.start(host);
  });

	it('should be a Github API Simulation', function(){
  	casper.then(function(){
			expect('body').to.have.text('Github API Simulation')
		});	
  })



});
	// it('json loveliness', function() {
	// 	casper.waitForSelector('form', function() {

	// 		this.fill("form#nameform", {
	// 			'name' : 'Emily',
	// 		}, true);

	// 	});
	// 	casper.then(function() {
 //      expect('body').to.have.text("{\"name\":\"Emily\"}");
	// 	});
	// });

 //  it('json hello', function() {
 //    casper.waitForSelector('form', function() {

 //      this.fill("form#nameform", {
 //        'name' : 'Emily',
 //      }, true);

 //    });
 //    casper.then(function() {
 //      expect('body').to.have.text("Hi Emily");
 //    });
 //  });




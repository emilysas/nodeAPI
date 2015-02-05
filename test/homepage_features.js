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

  it('should show a github JSON for a particular user', function(){
  	casper.thenOpen(host + '/users/emilysas', function(){
  		expect(response.headers.get(Access-Control-Allow-Origin).to.equal('*'));
  		expect(response.headers.get('Content-Type').to.equal('application/json; charset=utf-8'));
  		expect('body').to.have.text('{"login": "emilysas", "id": 7489940,, "avatar_url": "https://avatars.githubusercontent.com/u/7489940?v=3", "followers": 14,"following": 12}');
  	})
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




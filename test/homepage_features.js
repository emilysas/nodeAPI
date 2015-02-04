describe('homepage', function(){

  before(function(){
    casper.start('http://localhost:3000/');
  });

	it('json loveliness', function() {
		casper.waitForSelector('form', function() {

			this.fill("form#nameform", {
				'name' : 'Emily',
			}, true);

		});
		casper.then(function() {
      expect('body').to.have.text("{\"name\":\"Emily\"}");
		});
	});

  it('json hello', function() {
    casper.waitForSelector('form', function() {

      this.fill("form#nameform", {
        'name' : 'Emily',
      }, true);

    });
    casper.then(function() {
      expect('body').to.have.text("Hi Emily");
    });
  });


});

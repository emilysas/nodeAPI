


describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  // it('hello worlds', function(){
  //   casper.then(function(){
  //     expect("body").to.have.text("Hello world");
  //   });
  // });

	it('greeting', function(){
		casper.waitForSelector("form input[name='name']", function(){

			this.fillSelectors('form#user-login', {
				'input[name = name]' : "Emily",
			});

		}, true);
		
		// casper.then(function(){
			expect("body").to.have.text("HELLO CREATOR");
		// });
	});

});

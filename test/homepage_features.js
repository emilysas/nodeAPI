describe('homepage', function(){

  before(function(){
    casper.start('http://localhost:3000/');
  });

	it('greeting', function(){
		casper.waitForSelector('form', function() {

			this.fill("form#nameform", {
				'name' : 'Emily',
			}, true);

		});
    casper.then(function() {
      expect('h1').to.have.text('HI Emily');
    });
	});

  it('tweet', function() {
    casper.waitForSelector('#tweetform', function() {

        this.fill("#tweetform#find-twitter-account", {
          'account' : '@sasemily',
        }, true);

    });
    casper.then(function() {
      expect('#tweet').to.have.text("Hey @Jakobtek your code smells.");
    });
  });

});

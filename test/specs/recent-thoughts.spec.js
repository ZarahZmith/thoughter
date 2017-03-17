(function() {
  'use strict';

  let expect = chai.expect;

  describe('recent-thoughts module', function() {

    describe('showRecent function', function() {

      beforeEach(function() {
        let main = document.createElement('main');
        main.classList.add('recent');
        document.querySelector('body').appendChild(main);
      });

      afterEach(function() {
        //selects the specific one we want to remove
        let main = document.querySelector('main.recent');
        //go to main, go up to parent, remove child (in this case itself)
        main.parentNode.removeChild(main);
      });

      it('should be a function', function() {
        expect( window.thoughter.showRecent ).to.be.a.function;
      });

      it('should create articles for every thought it is given', function() {
        window.thoughter.showRecent([
          {content:'THIS IS HARD', createTime: '8:30', id: '7397258738'}
        ]);
        let articles = document.querySelectorAll('main.recent article');

        expect(articles.length).to.equal(1);
      });

      it('should handle an empty array by creating no articles', function() {
        let result = window.thoughter.showRecent([]);
        let articles = document.querySelectorAll('main.recent article');

        expect(articles.length).to.equal(0);
      });

      it('should not create an article if it doesn\'t have all three parts of the object that makes up a thought', function() {
        let result = window.thoughter.showRecent([
          {content:'THIS IS HARD'}
        ]);
        let articles = document.querySelectorAll('main.recent article');

        expect(articles.length).to.equal(0);
      });

      it('should confirm appropriate elements exist within the article if it is created', function() {
        let result = window.thoughter.showRecent([
          {content:'THIS IS HARD', createTime: '8:30', id: '7397258738'}
        ]);
        let articles = document.querySelectorAll('main article');

        expect(articles[0].classList.contains('panel')).to.be.true;
        expect(articles[0].classList.contains('panel-info')).to.be.true;
        expect(articles[0].getAttribute('id')).to.equal('thought-7397258738');

      });
    });

    // describe('getRecent function', function() {
    //
    //   beforeEach(function() {
    //     server = sinon.fakeServer.create();
    //     server.autoRespond = true;
    //     server.respondWith(
    //       'GET',
    //       'http://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC","limit":30}',
    //       [
    //         200,
    //         { 'Content-Type': 'appliaction/json'},
    //         '[ { "name":"Jordan" }, { "name":"Julianne" } ]'
    //       ]
    //     );
    //   });
    //
    //   afterEach(function() {
    //     server.restore();
    //   });
    //
    //   it('should be a function', function() {
    //     expect( window.thoughter.getRecent ).to.be.a.function;
    //   });
    //
    // });
  });
}());

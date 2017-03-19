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
        let article = document.querySelectorAll('main article')[0];

        expect(article.classList.contains('panel')).to.be.true;
        expect(article.classList.contains('panel-info')).to.be.true;
        expect(article.getAttribute('id')).to.equal('thought-7397258738');
        let header = article.querySelectorAll('header.panel-heading');
        expect(header.length).to.equal(1);
        // test for content of the header
        let paragraph = article.querySelectorAll('main.panel-body p');
        expect(paragraph.length).to.equal(1);
        expect(paragraph[0].innerText).to.equal('THIS IS HARD');
      });
    });

    describe('getRecent function', function() {

      beforeEach(function() {
        fetchMock.mock({
          method: 'GET',
          matcher: 'http://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC","limit":30}',
          response: {
            status: 200,
            headers: { 'Content-Type': 'appliaction/json'},
            body: JSON.stringify([
              { "name":"Jordan" },
              { "name":"Julianne" }
            ])
          }
        });

        fetchMock.mock({
          method: 'GET',
          matcher: '',
          response: {
              status: 404,
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                "message": "Not Found",
                "documentation_url": "https://developer.github.com/v3"
              })
          }
        });
      });

      afterEach(function() {
        fetchMock.restore();
      });

      it('should be a function', function() {
        expect( window.thoughter.getRecent ).to.be.a('function');
      });

      it('should get back data', function(done) {
        let promiseReturn = window.thoughter.getRecent(30);
        expect( promiseReturn.then ).to.be.a('function');
        expect( promiseReturn.catch ).to.be.a('function');

        promiseReturn
          .then(function handleData(data) {
            expect( data ).to.be.an('Array');
            expect( data.length ).to.equal(2);
            done();
          })
          .catch(function handleError(err) {
            done(err);
          });
      });

      //try to force a failure
      //try to enter something besides and number

    });
  });
}());

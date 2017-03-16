(function() {
  'use strict';

  let expect = chai.expect;

  describe('recent-thoughts module', function() {
    describe('showRecent function', function() {

      it('should be a function', function() {
        expect( window.thoughter.showRecent ).to.be.a.function;
      });

    });

    describe('getRecent function', function() {

      it('should be a function', function() {
        expect( window.thoughter.getRecent ).to.be.a.function;
      });

    });
  });
}());

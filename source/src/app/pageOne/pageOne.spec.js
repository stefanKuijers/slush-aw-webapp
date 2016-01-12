describe( 'pageOne', function() {
    describe( '.controller |', function() {
        var controller;

        beforeEach( function() {
            module('aw.webapp.pageOne');
        } );

        beforeEach( inject( function( $controller ) {
          controller = $controller('PageOneController');
        } ) );

        describe( 'vm.add()', function() {
            it('should have be defined', function() {
                expect(controller.add).toBeDefined();
            } );
        } );
    } );
} );

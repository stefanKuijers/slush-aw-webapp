describe( 'pageTwo', function() {
    describe( '.controller |', function() {
        var mockCommonService, reduceSpy, controller;
        
        beforeEach( function() {
            module('aw.webapp.pageTwo');
        } );

        beforeEach( inject( function( $controller, CommonService ) {
            controller = $controller('PageTwoController');
            mockCommonService = CommonService;
        } ) );

        describe( 'vm.reduce()', function() {
            it('should be defined and a reference to the service function', function() {
                expect( controller.reduce ).toBeDefined();
                expect( controller.reduce ).toEqual( mockCommonService.reduce );
            } );
        } );

        describe( 'vm.foo()', function() {
            it('should call vm.reduce()', function() {
                spyOn( controller, 'reduce' );
                controller.foo();

                expect( controller.reduce ).toHaveBeenCalled();
            } );
        } );
    } );
} );
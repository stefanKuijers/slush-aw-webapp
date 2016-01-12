describe( 'CommonService |', function() {
    var service;
    
    beforeEach( function() {
        module('aw.webapp.commonService');
    } );

    beforeEach( inject( function( CommonService ) {
        service = CommonService;
    } ) );

    describe( 'service.count', function() {
        it('should be 0 on first test', function() {
            expect( service.count ).toEqual( 0 );
        } );

        it('should increment when service.add is called', function() {
            var _count = service.count;
            service.add();
            expect( service.count ).toBeGreaterThan( _count );
        } );

        it('should decrement when service.add is called', function() {
            service.add();
            var _count = service.count;
            service.reduce();
            expect( service.count ).toBeLessThan( _count );
        } );

        it('should never be below zero', function() {
            service.reduce(10000000000);
            expect( service.count ).toEqual( 0 );
        } );
    } );
} );
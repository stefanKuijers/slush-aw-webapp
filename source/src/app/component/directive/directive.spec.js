describe('directive: <directive>', function() {
  var element, scope;

  beforeEach( function() {
    module('aw.webapp.directive');
    module('test.templates');
  } );

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element = '<directive></directive>';

    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should be compiled', function() {
    expect(element.text()).toBeDefined();
  } );
});
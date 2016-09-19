//This is an example of a page test

suite(' "About" Page Tests', function(){
 test('Let\'s get it right betty! page should contain link to contact page', function(){
  assert($('a[href="/contact"]').length);
 });
});

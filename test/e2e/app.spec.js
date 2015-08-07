describe('Index', function() {

    it('should have a title', function() {
        browser.get('http://localhost:9001');
        expect(browser.getTitle()).toBe('Learning Angular');
    });

    //it('should show conclusions by clicking the big blue button', function(){
    //    browser.get('/');
    //    var conclusions = element(by.id('conclusions'));
    //    expect(conclusions).toBeUndefined();
        //element(by.buttonText('Here are my thoughts')).click().then(function(){
        //    expect(conclusions).toBeDefined();
        //    expect(conclusions.html()).toContains('I\'m truly convinced by');
        //});
    //});
});
describe('Index', function () {

    it('should have a title', function () {
        browser.get('http://localhost:9001');
        expect(browser.getTitle()).toBe('Learning Angular');
    });

    it('should show conclusions by clicking the big blue button', function () {
        var conclusions = element(by.id('conclusions'));
        expect(conclusions.isPresent()).toBe(false);
        element(by.buttonText('Here are my thoughts')).click();
        expect(conclusions.isPresent()).toBe(true);
        expect(conclusions.getInnerHtml()).toContain('I\'m truly convinced by');
    });
});
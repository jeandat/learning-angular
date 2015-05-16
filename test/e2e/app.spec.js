describe('Index', function() {
    it('should have a title', function() {
        browser.get('/');
        expect(browser.getTitle()).toBe('Learning Angular');
    });
});
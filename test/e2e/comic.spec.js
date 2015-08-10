describe('Comic: ', function () {

    var navbar = new Navbar();
    var comicList = $$('comic-list-item');

    it('should show a comic list', function () {
        navbar.goToComic();
        expect(comicList.count()).toBeGreaterThan(1);
    });

    it('shoud show comic info', function () {
        var comic = comicList.first();
        var comicLink = comic.$('[href*=comic]');
        comicLink.getAttribute('href').then(function (href) {
            var comicId = /[0-9]+/.exec(href);
            comicLink.click();
            browser.getCurrentUrl().then(function (url) {
                  expect(url).toContain(comicId);
            });
        });
    });

});
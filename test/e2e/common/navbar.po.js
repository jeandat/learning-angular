global.Navbar = function(){
    var navbar = $('ul.nav');
    var comicLink = navbar.$('[href*=comic]');
    this.goToComic = function () {
        return comicLink.click();
    };
};
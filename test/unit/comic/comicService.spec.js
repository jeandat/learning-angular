describe('comicFactory: ', function () {

    var comicService, $httpBackend;

    beforeEach(module('app'));

    beforeEach(inject(function (_comicService_, _$httpBackend_) {
        comicService = _comicService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should retrieve a list of graphic novels', function () {

        expect(comicService).toBeDefined();
        expect(comicService.graphicNovels).toBeDefined();

        // WebStorm folding abilities are truly essential for that kind of instructions ;)
        $httpBackend.expectGET(/.*\/comics\?apikey=.*&format=graphic\+novel/)
            .respond({
                "code": 200,
                "status": "Ok",
                "copyright": "© 2015 MARVEL",
                "attributionText": "Data provided by Marvel. © 2015 MARVEL",
                "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2015 MARVEL</a>",
                "etag": "f81527f03e9b114b6db4d14316966e4ca8ad4339",
                "data": {
                    "offset": 0,
                    "limit": 20,
                    "total": 77,
                    "count": 20,
                    "results": [{
                        "id": 40921,
                        "digitalId": 0,
                        "title": "Ghost Rider: Official Index to the Marvel Universe GN-TPB (Graphic Novel)",
                        "issueNumber": 1,
                        "variantDescription": "",
                        "description": "The complete history of the Spirit of Vengeance from\r\nhis earliest appearances to the present day! This\r\nfact-packed volume chronicles every character, team,\r\nplace and piece of equipment &mdash; and provides vital\r\ninformation about all things Ghost Rider! Collecting\r\nthe Ghost Rider material from WOLVERINE, PUNISHER\r\n& GHOST RIDER: OFFICIAL INDEX TO THE MARVEL\r\nUNIVERSE #1-6.\r\n152 PGS./Rated T+ &#133;$19.99",
                        "modified": "2012-01-30T01:31:01-0500",
                        "isbn": "978-0-7851-6200-1",
                        "upc": "5960616200-00111",
                        "diamondCode": "",
                        "ean": "9780785 162001 51999",
                        "issn": "",
                        "format": "Graphic Novel",
                        "pageCount": 152,
                        "textObjects": [{
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "The complete history of the Spirit of Vengeance from\r\nhis earliest appearances to the present day! This\r\nfact-packed volume chronicles every character, team,\r\nplace and piece of equipment &mdash; and provides vital\r\ninformation about all things Ghost Rider! Collecting\r\nthe Ghost Rider material from WOLVERINE, PUNISHER\r\n& GHOST RIDER: OFFICIAL INDEX TO THE MARVEL\r\nUNIVERSE #1-6.\r\n152 PGS./Rated T+ &#133;$19.99"
                        }],
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40921",
                        "urls": [{
                            "type": "detail",
                            "url": "http://marvel.com/comics/collection/40921/ghost_rider_official_index_to_the_marvel_universe_gn-tpb_graphic_novel?utm_campaign=apiRef&utm_source=0a52dbf67ba6feb10084654c8a41e770"
                        }],
                        "series": {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/15136",
                            "name": "Ghost Rider: Official Index to the Marvel Universe GN-TPB (2011 - Present)"
                        },
                        "variants": [],
                        "collections": [],
                        "collectedIssues": [],
                        "dates": [{"type": "onsaleDate", "date": "2012-02-01T00:00:00-0500"}, {
                            "type": "focDate",
                            "date": "2012-01-17T00:00:00-0500"
                        }],
                        "prices": [{"type": "printPrice", "price": 19.99}],
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4ec2b1272cee0",
                            "extension": "jpg"
                        },
                        "images": [{
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4ec2b1272cee0",
                            "extension": "jpg"
                        }],
                        "creators": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/creators",
                            "items": [],
                            "returned": 0
                        },
                        "characters": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/characters",
                            "items": [],
                            "returned": 0
                        },
                        "stories": {
                            "available": 2,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/stories",
                            "items": [{
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/92664",
                                "name": "Cover #92664",
                                "type": "cover"
                            }, {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/92665",
                                "name": "Interior #92665",
                                "type": "interiorStory"
                            }],
                            "returned": 2
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/events",
                            "items": [],
                            "returned": 0
                        }
                    }, {
                        "id": 38292,
                        "digitalId": 0,
                        "title": "New X-Men Vol. 8: Here Comes Tomorrow GN-TPB (Graphic Novel)",
                        "issueNumber": 1,
                        "variantDescription": "",
                        "description": "Legendary artist Marc Silvestri returns to the X-Men as Grant Morrison brings his mind-bending run to a close! In a tale inspired by the classic \"Days of Future Past\" storyline, meet the X-Men from 150 years in our future. While some faces may seem familiar, readers will discover all-new heroes and villains for the first time. What incredible force threatens to destroy the mutants of the future, and how will it affect the X-Men of today? Collecting NEW X-MEN (2001) #151-154.",
                        "modified": "2011-12-13T01:33:22-0500",
                        "isbn": "978-0-7851-5539-3",
                        "upc": "5960615539-00111",
                        "diamondCode": "",
                        "ean": "9780785 155393 51499",
                        "issn": "",
                        "format": "Graphic Novel",
                        "pageCount": 112,
                        "textObjects": [{
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "Legendary artist Marc Silvestri returns to the X-Men as Grant Morrison brings his mind-bending run to a close! In a tale inspired by the classic \"Days of Future Past\" storyline, meet the X-Men from 150 years in our future. While some faces may seem familiar, readers will discover all-new heroes and villains for the first time. What incredible force threatens to destroy the mutants of the future, and how will it affect the X-Men of today? Collecting NEW X-MEN (2001) #151-154."
                        }],
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38292",
                        "urls": [{
                            "type": "detail",
                            "url": "http://marvel.com/comics/collection/38292/new_x-men_vol_8_here_comes_tomorrow_gn-tpb_graphic_novel?utm_campaign=apiRef&utm_source=0a52dbf67ba6feb10084654c8a41e770"
                        }],
                        "series": {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/13793",
                            "name": "New X-Men Vol. 8: Here Comes Tomorrow GN-TPB (2011 - Present)"
                        },
                        "variants": [],
                        "collections": [],
                        "collectedIssues": [],
                        "dates": [{"type": "onsaleDate", "date": "2011-12-14T00:00:00-0500"}, {
                            "type": "focDate",
                            "date": "2011-11-29T00:00:00-0500"
                        }],
                        "prices": [{"type": "printPrice", "price": 14.99}],
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4e7ba2a15bf18",
                            "extension": "jpg"
                        },
                        "images": [{
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4e7ba2a15bf18",
                            "extension": "jpg"
                        }],
                        "creators": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38292/creators",
                            "items": [],
                            "returned": 0
                        },
                        "characters": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38292/characters",
                            "items": [],
                            "returned": 0
                        },
                        "stories": {
                            "available": 2,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38292/stories",
                            "items": [{
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/94862",
                                "name": "NEW X-MEN",
                                "type": "interiorStory"
                            }, {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/94863",
                                "name": "NEW X-MEN vol 8",
                                "type": "cover"
                            }],
                            "returned": 2
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/38292/events",
                            "items": [],
                            "returned": 0
                        }
                    }]
                }
            });

        var promise = comicService.graphicNovels();

        $httpBackend.flush();

        expect(promise.then).toBeDefined();
        expect(promise.$object).toBeDefined();

        var novels = promise.$object;
        expect(novels.length).toBe(2);
        expect(novels[0].id).toBe(40921);
        expect(novels[1].id).toBe(38292);

    });

    it('should fail to retrieve a list of graphic novels', function () {

        expect(comicService).toBeDefined();
        expect(comicService.graphicNovels).toBeDefined();

        // WebStorm folding abilities are truly essential for that kind of instructions ;)
        $httpBackend.expectGET(/.*\/comics\?apikey=.*&format=graphic\+novel/)
            .respond(500);

        var promise = comicService.graphicNovels();

        $httpBackend.flush();

        expect(promise.then).toBeDefined();
        expect(promise.$object).toBeDefined();
        expect(promise.$object.status).toBe(500);

    });

    it('should retrieve a graphic novel details', function () {

        expect(comicService).toBeDefined();
        expect(comicService.graphicNovel).toBeDefined();

        // WebStorm folding abilities are truly essential for that kind of instructions ;)
        $httpBackend.expectGET(/\/comics\/40921\?apikey=.*/)
            .respond({
                "code": 200,
                "status": "Ok",
                "copyright": "© 2015 MARVEL",
                "attributionText": "Data provided by Marvel. © 2015 MARVEL",
                "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2015 MARVEL</a>",
                "etag": "61d4abc716813dc5e6f68f58489989801e70e09f",
                "data": {
                    "offset": 0,
                    "limit": 20,
                    "total": 1,
                    "count": 1,
                    "results": [{
                        "id": 40921,
                        "digitalId": 0,
                        "title": "Ghost Rider: Official Index to the Marvel Universe GN-TPB (Graphic Novel)",
                        "issueNumber": 1,
                        "variantDescription": "",
                        "description": "The complete history of the Spirit of Vengeance from\r\nhis earliest appearances to the present day! This\r\nfact-packed volume chronicles every character, team,\r\nplace and piece of equipment &mdash; and provides vital\r\ninformation about all things Ghost Rider! Collecting\r\nthe Ghost Rider material from WOLVERINE, PUNISHER\r\n& GHOST RIDER: OFFICIAL INDEX TO THE MARVEL\r\nUNIVERSE #1-6.\r\n152 PGS./Rated T+ &#133;$19.99",
                        "modified": "2012-01-30T01:31:01-0500",
                        "isbn": "978-0-7851-6200-1",
                        "upc": "5960616200-00111",
                        "diamondCode": "",
                        "ean": "9780785 162001 51999",
                        "issn": "",
                        "format": "Graphic Novel",
                        "pageCount": 152,
                        "textObjects": [{
                            "type": "issue_solicit_text",
                            "language": "en-us",
                            "text": "The complete history of the Spirit of Vengeance from\r\nhis earliest appearances to the present day! This\r\nfact-packed volume chronicles every character, team,\r\nplace and piece of equipment &mdash; and provides vital\r\ninformation about all things Ghost Rider! Collecting\r\nthe Ghost Rider material from WOLVERINE, PUNISHER\r\n& GHOST RIDER: OFFICIAL INDEX TO THE MARVEL\r\nUNIVERSE #1-6.\r\n152 PGS./Rated T+ &#133;$19.99"
                        }],
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40921",
                        "urls": [{
                            "type": "detail",
                            "url": "http://marvel.com/comics/collection/40921/ghost_rider_official_index_to_the_marvel_universe_gn-tpb_graphic_novel?utm_campaign=apiRef&utm_source=0a52dbf67ba6feb10084654c8a41e770"
                        }],
                        "series": {
                            "resourceURI": "http://gateway.marvel.com/v1/public/series/15136",
                            "name": "Ghost Rider: Official Index to the Marvel Universe GN-TPB (2011 - Present)"
                        },
                        "variants": [],
                        "collections": [],
                        "collectedIssues": [],
                        "dates": [{"type": "onsaleDate", "date": "2012-02-01T00:00:00-0500"}, {
                            "type": "focDate",
                            "date": "2012-01-17T00:00:00-0500"
                        }],
                        "prices": [{"type": "printPrice", "price": 19.99}],
                        "thumbnail": {
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4ec2b1272cee0",
                            "extension": "jpg"
                        },
                        "images": [{
                            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4ec2b1272cee0",
                            "extension": "jpg"
                        }],
                        "creators": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/creators",
                            "items": [],
                            "returned": 0
                        },
                        "characters": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/characters",
                            "items": [],
                            "returned": 0
                        },
                        "stories": {
                            "available": 2,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/stories",
                            "items": [{
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/92664",
                                "name": "Cover #92664",
                                "type": "cover"
                            }, {
                                "resourceURI": "http://gateway.marvel.com/v1/public/stories/92665",
                                "name": "Interior #92665",
                                "type": "interiorStory"
                            }],
                            "returned": 2
                        },
                        "events": {
                            "available": 0,
                            "collectionURI": "http://gateway.marvel.com/v1/public/comics/40921/events",
                            "items": [],
                            "returned": 0
                        }
                    }]
                }
            });

        var promise = comicService.graphicNovel(40921);

        $httpBackend.flush();

        expect(promise.then).toBeDefined();
        expect(promise.$object).toBeDefined();

        var novel = promise.$object;
        expect(novel.id).toBe(40921);

    });

    it('should fail to retrieve a graphic novel details', function () {

        expect(comicService).toBeDefined();
        expect(comicService.graphicNovel).toBeDefined();

        // WebStorm folding abilities are truly essential for that kind of instructions ;)
        $httpBackend.expectGET(/\/comics\/40921\?apikey=.*/)
            .respond(0);

        var promise = comicService.graphicNovel(40921);

        $httpBackend.flush();

        expect(promise.then).toBeDefined();
        expect(promise.$object).toBeDefined();
        expect(promise.$object.status).toBe(0);

    });



});
(function () {
    'use strict';

    var
        router = require('router'),
        appData = require("appData"),
        requester = require('JsonRequester'),
        secret = appData.get("secret"),
        token = appData.get("token"),
        test = appData.get("test"),

        domain = "https://minsida.malmo.se/api/v1/",
        testDomain = 'https://minsidatest.malmo.se/api/v1/';

    var baseUrl = test ? testDomain : domain;
    var endUrl = "&app_token=" + token + "&app_secret=" + secret;



    router.get('/group_contacts/search/:value', function (req, res) {

        var value = decodeURIComponent(req.params.value);
        var url = baseUrl + "group_contacts/search?q=" + encodeURIComponent(value) + endUrl;

        requester.get(url).done(function (data) {

            res.json(data);

        }).fail(function (message, status) {
            res.status(status.statusCode).json(message);
        });
    });

    router.get('/group_contacts/:id', function (req, res) {
        
        var value = decodeURIComponent(req.params.id);
        var url = baseUrl + "group_contacts/" + encodeURIComponent(value) + "?" + endUrl;

        requester.get(url).done(function (data) {

            res.json(data);

        }).fail(function (message, status) {
            res.status(status.statusCode).json(message);
        });
    });

    router.get('/employees/search/:value', function (req, res) {
        
        var value = decodeURIComponent(req.params.value);
        var url = baseUrl + "employees/search?q=" + encodeURIComponent(value) + endUrl;

        requester.get(url).done(function (data) {

            res.json(data);

        }).fail(function (message, status) {
            res.status(status.statusCode).json(message);
        });
    });

    router.get('/employees/:id', function (req, res) {

        var value = decodeURIComponent(req.params.id);
        var url = baseUrl + "employees/" + encodeURIComponent(value) + "?" + endUrl;

        requester.get(url).done(function (data) {

            res.json(data);

        }).fail(function (message, status) {
            res.status(status.statusCode).json(message);
        });
    });

}());
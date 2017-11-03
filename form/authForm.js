/**
 * Created by Aleksandr Kuzmin on 03.11.2017.
 */
const fs = require('fs');
var authForm = function() {
    var common = ('../config/common.js'),
        EC = protractor.ExpectedConditions,
        elementLogin = element(by.id('user_email')),
        elementPassword = element(by.id('user_password')),
        elementOk = element(by.xpath('//input[@type="submit"]')),
        login = element(by.xpath('//a[@class="navbar-link fedora-navbar-link"]')),
        loginTrue = 'log',
        passTrue = 'pass',
        url = 'https://courses.way2automation.com/';

    this.getSite = function () {
        browser.get(url);
    };

    this.authorizaions = function () {
        return fs.readFile('cookie-1', 'utf8', function(err, contents) {
            if (err) {
                login.click();
                browser.wait(EC.visibilityOf(elementLogin), 5000);
                elementLogin.sendKeys(loginTrue);
                elementPassword.sendKeys(passTrue);
                elementOk.click();
                browser.manage().getCookie('_session_id').then(function(cookie) {
                    fs.writeFile('cookie-1', cookie.value, function (err) {
                        if (err) {
                            return console.log('writefile error', err);
                        }
                    });
                });
                return;
            }
            browser.manage().addCookie({name: '_session_id', value: contents});
            browser.refresh();
        });
    };

};
module.exports = authForm;
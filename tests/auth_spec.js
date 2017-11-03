describe ("Test createRole", function(){
    var common = require('../config/common.js'),
        authForm = new common.authForm(),
        EC = protractor.ExpectedConditions,
        gravatar = element(by.xpath('//li[@class="dropdown"]'));
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();

    beforeEach(function () {
        authForm.getSite();
    });

    // 1. Авторизация;
    it("Correct authorizations", function () {
        authForm.authorizaions();
        browser.wait(EC.visibilityOf(gravatar), 5000);
    });
});
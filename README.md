Learning_protractor
=========
Использование куков.


Начало работы
--------
### Окружение

1. [Node.js](https://nodejs.org/en/)
2. [Protractor](http://www.protractortest.org/#/)
3. [Protractor-Jasmine2-Screenshot-Reporter](https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter)
    
### Настройка окружения
    
     node.js
     npm install -g protractor
     webdriver-manager update
     webdriver-manager update --ie
     webdriver-manager update --ie32
     webdriver-manager start
    
### Запуск тестов

1. Через консоль
2. С помощью WebStorm

### Через консоль

     Запускаем команду: webdriver-manager start
     В консоли переходим в папку, где лежит conf.js
     Запускаем команду: protractor conf.js (в другой консоли)
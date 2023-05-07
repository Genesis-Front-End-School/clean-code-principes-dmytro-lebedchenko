# HW #4 // Тестування

## [DEMO LINK](https://dmytro-lebedchenko.github.io/react_courses-app/#/)

# Опис мого завдання:

## Чому навчився:
В рамках даного завдання, мною було опановано базові навички написання JavaScript тестів використовуючи Jest та Cypress. Також я ознайомився з документацією React Testing Library, Cypress, Jest, Enzyme, Vue-test-utils.

## Структура:
Unit-тести написані на основі фреймворку Jest знаходяться у `src/tests`, де тести для `pages` і `components` розміщені у відповідних папках. Також у корені папки `tests` є файл `testData.ts`, в якому розміщенні базові константи, які використовуються у процесі тестування.

Автоматичні тести створені на базі бібліотеки Cypress, розміщенні у кореневій папці проекту. Файл з тестами для проекту знаходяться тут: `Cypress/e2e/app.cy.js`.

## Як запустити тести:
`npm i` – для встановлення усіх необхідних залежностей. <br>
`npm run jest` – для запуску виключно unit-тестів на базі Jest. <br>
`npm run test` – для запуску комплексного тестування(Jest, Cypress) та генерування структурованого html-репорту Mochawesome з результатом тестування, який буде знаходись у кореневій папці `mochawesome-report/mochawesome.html`.

## Test report
## [TEST REPORT - DEMO LINK](./mochawesome-report/mochawesome.html)

![Mochawesome report](./readme/preview/mocha_report.gif)

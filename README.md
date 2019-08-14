# Структура проекта

Структура проекта после сборки выражается следующим деревом:

    |-sample-project/
      |-frontend/
        |-assets/
          |-fonts/
          |-icons/
            |-sprite/
              |-symbol/
                |-svg/
          |-img/
        |-pug/
          |-components/
            |-index.pug
          |-pages/
          |-templates/
        |-scripts/
          |-components/
          |-libraries/
        |-styles/
          |-libraries/
          |-scss/
            |-components/
            |-pages/
            |-utilites/
            |-main.css
      |-public/
        |-assets/
          |-fonts/
          |-icons/
          |-img/
        |-maps/
          |-main.css.map
        |-scripts/
          |-libraries/
            |-all
            |-libraries
            |-scripts
          script.js
        |-styles/
          |-libraries/
            |-all
            |-libraries
            |-styles
          |-main.css
        index.html
      |-tasks/
      |-gulpfile.js
      |-package.json
      |-README.md


В изначально проект имеет следующую структуру:

    sample-project/
      |-frontend/
        |-assets/
          |-fonts/
          |-icons/
            |-sprite/
          |-img/
        |-pug/
          |-components/
            |-index.pug
          |-pages/
          |-templates/
        |-scripts/
          |-components/
          |-libraries/
        |-styles/
          |-libraries/
          |-scss/
            |-components/
            |-pages/
            |-utilites/
            main.css
      |-tasks/
      |-gulpfile.js
      |-package.json
      |-README.md

Внутри папки `frontend/` будут сосредоточены все файлы проекты, которые подлежат сборке.
Внутри папки `tasks/` лежат задачи для ссборки проекта, которые включаются в файл `gulpfile.js`

### Структура файлов внутри папки `frontend/`

    |-frontend/
      |-assets/
        |-fonts/
        |-icons/
          |-sprite/
            |-symbol/
              |-svg/
                |-sprite.symbol.svg
        |-img/
      |-pug/
        |-components/
        |-pages/
          |-index.pug
        |-templates/
      |-scripts/
        |-components/
        |-libraries/
      |-styles/
        |-libraries/
        |-scss/
          |-components/
          |-pages/
          |-utilites/
          |-main.css

Внутри `frontend/` лежат 4 папки верхнего уровня:

  1. `assets/` - содержит все исходники (шрифты, изображения, коноки).
  2. `pug/` - содержит все файлы разметки с расширением `.pug`.
  3. `scripts/` - содержит все скрипты проекта.
  4. `styles/` - содержит все стили проекта.

### Структура файлов внутри папки `assets/`

    |-assets/
      |-fonts/
      |-icons/
        |-sprite/
          |-symbol/
            |-svg/
      |-img/

Внутри `assets/` лежат 3 папки верхнего уровня:
  1. `fonts/` - содержит все шрифты.
  2. `icons/` - содержит все файлы формата `.svg`.
  3. `img/` - содержит все остальные изображения (`.jpg`, `.png`, `.gif` и прочие).

Внутри `icons/` лежат все файлы формата `.svg`, а также папка `sprite/`, в которой содержатся только те svg-файлы, которые **нужно** добавить в спрайт.

### Структура файлов внутри папки `pug/`

    |-pug/
      |-components/
      |-pages/
        |-index.pug
      |-templates/

Внутри `pug/` лежат 3 папки верхнего уровня:

1. `components/` - компоненты для переиспользования.
2. `pages/` - непосредственно файлы страниц, которые будут скомпилированы в `.html`.
3. `templates/` - интерактивные компоненты для расширения или mixins.

### Структура файлов внутри папки `scripts/`

    |-scripts/
      |-components/
      |-libraries/

Внутри `scripts/` лежат 3 папки верхнего уровня:

1. `components/` - все `.js` файлы, которые потом будут собираться в общий `script.js`
2. `libraries/` - все файлы библиотек. Подключаются отдельно.

### Структура файлов внутри папки `styles/`

    |-styles/
      |-libraries/
      |-scss/
        |-components/
        |-pages/
        |-utilites/
        |-main.css

Внутри `styles/` лежат 2 папки верхнего уровня:

1. `libraries/` - все файлы библиотек. Подключаются отдельно.
2. `scss/` - весь `.scss` для проекта

Внутри `scss/` лежат 3 папки верхнего уровня:

1. `components/` - стили для компонентов проекта
2. `pages/` - стили для страниц проекта
3. `utilites/` - служебная папка, куда можно включать такие файлы как `utilites.scss`, `fonts.scss`, `reset.scss`, `variables.scss` и  прочие.

а также файл `main.scss`, куда стоит импортировать все `.scss` файлы, которые нужно включить в проект.

### Структура файлов внутри папки `public/`

    |-public/
      |-assets/
        |-fonts/
        |-icons/
        |-img/
      |-maps/
        |-main.css.map
      |-scripts/
        |-libraries/
          |-all
          |-libraries
          |-scripts
        script.js
      |-styles/
        |-libraries/
          |-all
          |-libraries
          |-styles
        |-main.css
      index.html

Папка `public/` автоматически генерируется gulp`ом. Внутри содержится собранный проект.

---

Папка `assets/` содержит минифицированные исходники для проекта:

  1. Папка `fonts/` содержит все шрифты проекта.
  2. Папка `icons/` содержит минифицированные файлы `.svg`, которые не были включены в спрайт.
  3. Папка `img/` содержит минифицированные изображений других форматов.

Папка `maps/` содержит файл `main.css.map` с sourcemap`ом для стилей проекта

Папка `scripts/` содержит файл `script.js` со всеми скриптами для проекта, которые прошли транспиляцию через babel, а также папку `libraries/`, где лежат все скрипты библиотек.

Папка `styles/` содержит файл `main.css` со всеми скриптами для проекта, которые прошли транспиляцию через autoprefixer, а также папку `libraries/`, где лежат все стили библиотек.

Также папка `public` содержит файл `index.html`, который является входной точкой в приложение.

# Запуск сборки проекта

Перед сборкой следует установить необходимы зависимости, запустив в консоли команду `yarn`

Чтобы собрать проект, достаточно запустить в консоли команду `gulp`, после чего сборщик соберет все файлы и начнет следить за их изменениями, откроется браузер с открытым `index.html` файлом.

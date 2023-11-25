Цей додаток був створений за допомогою [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Головний стек: 
- NextJS
- TypeScript
- Redux Toolkit

## Початок роботи

Клон репозиторія
```
$ git clone https://github.com/bohdan-ryzhko/cogitize-solutions
```
Встановлення залежностей

```
$ npm install
```
Запуск серверу

```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у своєму браузері, щоб побачити результат.

## Як працює додаток

Дизайн був розроблений для усіх видів пристроїв:

- mobile

  ![mobile view 1](./public/readme-img/mobile-view-1.png)
  ![mobile view 2](./public/readme-img/mobile-view-2.png)

- tablet

  ![tablet view 1](./public/readme-img/tablet-view-1.png)
  ![tablet view 2](./public/readme-img/tablet-view-2.png)

- desktop

  ![desktop view 1](./public/readme-img/desktop-view.png)

При натисканні на кнопку "Додати нову посаду" зʼявляється модальне вікно, в якому знаходиться форма з валідацією (використовував Formik + Yup):
  ![modal](./public/readme-img/modal.png)

Після додавання валідних значень додається нова посада, вся інформація зберігається в локальному сховищі (для цього використовував Redux Persist) і зʼявляється повідомлення (для цього використовував react-toastify)
  ![Add-new-post](./public/readme-img/add-new-post.png)

Також було додано функціонал drag and drop
  ![drag-and-drop-1](./public/readme-img/drag-1.png)
  ![drag-and-drop-2](./public/readme-img/drag-2.png)

У вводному полі "Назва" можна динамічно і одразу змінювати імʼя обраного користувача
  ![controll-name](./public/readme-img/controll-name.png)

Усі змінені дані, дадані посади та обрані checboxes зберігаються і залишаються тими самими і після перезавантаження сторінки
  ![save-info](./public/readme-img/save-check.png)

Також є можливість видаляти обрану посаду
  ![remove-post](./public/readme-img/remove-post.png)

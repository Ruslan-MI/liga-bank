import {
  nanoid,
} from "nanoid";

export const getAdditionalInfoData = () => ([
  {
    name: `credit`,
    slogan: `Кредиты на любой случай`,
    link: {
      title: `Рассчитать кредит`,
      href: `#credit-calculator`,
    },
    images: [
      {
        title: `black-credit-card`,
        src: `img/black-credit-card.png`,
        description: `Образец тёмной кредитной карты ЛИГА Банка`,
        id: nanoid(),
      },
      {
        title: `white-credit-card`,
        src: `img/white-credit-card.png`,
        description: `Образец светлой кредитной карты ЛИГА Банка`,
        id: nanoid(),
      },
    ],
    id: nanoid(),
  },
  {
    name: `tomorrow`,
    slogan: `Ваша уверенность в завтрашнем дне`,
    backgroundImage: `img/slide-tomorrow-background.jpg`,
    id: nanoid(),
  },
  {
    name: `nearby`,
    slogan: `Всегда рядом`,
    backgroundImage: `img/slide-nearby-background.jpg`,
    link: {
      title: `Найти отделение`,
      href: `#bank-branches`,
    },
    id: nanoid(),
  },
]);

export const getServicesData = () => ([
  {
    name: `deposits`,
    title: `Вклады`,
    heading: `Вклады Лига Банка – это выгодная\nинвестиция в свое будущее`,
    description: [
      `Проценты по вкладам до 7%`,
      `Разнообразные условия`,
      `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`,
    ],
    link: {
      title: `Узнать подробнее`,
      href: `#`,
    },
    picture: `img/piggy-bank.jpg`,
    id: nanoid(),
  },
  {
    name: `credits`,
    title: `Кредиты`,
    heading: `Лига Банк выдает кредиты\nпод любые цели`,
    description: [
      `Ипотечный кредит`,
      `Автокредит`,
      `Потребительский кредит`,
    ],
    offer: {
      __html: `Рассчитайте ежемесячный платеж\nи ставку по кредиту воспользовавшись\nнашим <a href="#credit-calculator">кредитным калькулятором</a>`,
    },
    picture: `img/car.jpg`,
    id: nanoid(),
  },
  {
    name: `insurance`,
    title: `Страхование`,
    heading: `Лига Страхование — застрахуем\nвсе что захотите`,
    description: [
      `Автомобильное страхование`,
      `Страхование жизни и здоровья`,
      `Страхование недвижимости`,
    ],
    link: {
      title: `Узнать подробнее`,
      href: `#`,
    },
    picture: `img/lock.jpg`,
    id: nanoid(),
  },
  {
    name: `online-services`,
    title: `Онлайн-сервисы`,
    heading: `Лига Банк — это огромное количество онлайн-сервисов для вашего удобства`,
    description: [
      `Мобильный банк,\nкоторый всегда под рукой`,
      `Приложение Лига-проездной позволит вам оплачивать билеты по всему миру`,
    ],
    link: {
      title: `Узнать подробнее`,
      href: `#`,
    },
    picture: `img/smartphone.jpg`,
    id: nanoid(),
  },
]);

export const getBankBranches = () => ([
  {
    city: `Moscow`,
    coords: {
      lat: 55.75269667694121,
      lng: 37.613409893289905,
    },
  },
  {
    city: `Saratov`,
    coords: {
      lat: 51.545816781816264,
      lng: 46.01441986550114,
    },
  },
  {
    city: `Kazan`,
    coords: {
      lat: 55.78731510550702,
      lng: 49.122736067764954,
    },
  },
  {
    city: `Tumen`,
    coords: {
      lat: 57.154306621130964,
      lng: 65.5598507569445,
    },
  },
  {
    city: `Omsk`,
    coords: {
      lat: 54.9813021831944,
      lng: 73.3715847719382,
    },
  },
]);

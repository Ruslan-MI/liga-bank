import {
  nanoid,
} from "nanoid";

export const getAdditionalInfoData = () => ([
  {
    name: `credit`,
    slogan: `Кредиты на любой случай`,
    link: {
      title: `Рассчитать кредит`,
      href: `#`,
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
      href: `#`,
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
      text: `Рассчитайте ежемесячный платеж\nи ставку по кредиту воспользовавшись\nнашим `,
      link: {
        title: `кредитным калькулятором`,
        href: `#`,
      },
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

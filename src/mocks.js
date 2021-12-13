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

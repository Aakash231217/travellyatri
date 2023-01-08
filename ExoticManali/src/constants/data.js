import images from './images';

const wines = [
  {
    title: 'Kasol',
    tags: '01',
  },
  {
    title: 'Manikaran',
    tags: '02',
  },
  {
    title: 'Sissu',
    tags: '03',
  },
];

const cocktails = [
  {
    title: 'Camp Stay',
    tags: 'Camping | Snowy Areas ',
  },
  {
    title: 'Drinks ',
    tags: 'Night Drinks | Bonfire',
  },
  {
    title: '3 times Food',
    tags: 'Lunch | Non-Veg | Veg ',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Kasol',
    subtitle: ' It is known for its thrilling treks, flavoursome food, roaring river and heartfelt humanity.',
  },
  {
    imgUrl: images.award02,
    title: 'Manikaran',
    subtitle: 'Nestling among, sylvan surrounding in Parbati valley, Manikaran is famous for its hot springs.',
  },
  {
    imgUrl: images.award03,
    title: 'Sissu',
    subtitle: 'Situated on the way of Leh-Manali Highway, Sissu is home to one of the most beautiful waterfalls in Himachal.',
  },
];

export default { wines, cocktails, awards };

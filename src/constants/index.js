import { facebook, headset, instagram, linkedin, twitter, vrpano } from "../assets/icons";
import { planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8 } from "../assets/images";

export const exploreWorlds = [
  {
    id: 1,
    name: 'world-1',
    imgUrl: planet1,
    title: 'The Hogwarts',
  },
  {
    id: 2,
    name: 'world-2',
    imgUrl: planet2,
    title: 'The Upside Down',
  },
  {
    id: 3,
    name: 'world-3',
    imgUrl: planet3,
    title: 'Kadirojo Permai',
  },
  {
    id: 4,
    name: 'world-4',
    imgUrl: planet4,
    title: 'Paradise Island',
  },
  {
    id: 5,
    name: 'world-5',
    imgUrl: planet5,
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  {id: '01', text: 'Find a world that suits you and you want to enter', container: 'max-w-[234px]'},
  {id: '02', text: 'Enter the world by reading basmalah to be safe', container: 'max-w-[270px]'},
  {id: '03', text: 'No need to beat around the bush, just stay on the gas and have fun', container: 'max-w-[370px]'},
];

export const newFeatures = [
  {
    imgUrl: vrpano,
    title: 'A new world',
    subtitle:
        'We have the latest update with new world for you to try never mind',
    container: 'max-w-[207px]'
  },
  {
    imgUrl: headset,
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
    container: 'max-w-[225px]'
  },
];

export const insights = [
  {
    imgUrl: planet6,
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: planet7,
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: planet8,
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: twitter,
  },
  {
    name: 'linkedin',
    url: linkedin,
  },
  {
    name: 'instagram',
    url: instagram,
  },
  {
    name: 'facebook',
    url: facebook,
  },
];

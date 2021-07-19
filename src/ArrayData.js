var FoodMenuTH = [
  {
    text: "NO.",
    css: "first",
  },
  {
    text: "Image",
    css: "image",
  },
  {
    text: "NameTH",
    css: "name",
  },
  {
    text: "NameEN",
    css: "name",
  },
  {
    text: "Manager",
    css: "manager",
  },
];
var FoodMenuTD = [
  {
    id: "FM0001",
    img: "default.jpg",
    nameTH: "Minerva Hooper",
    nameEN: "Doris Greene	",
    star: true,
  },
  {
    id: "FM0002",
    img: "default.jpg",
    nameTH: "Jacob",
    nameEN: "Doris Greene	",
    star: true,
  },
  {
    id: "FM0003",
    img: "default.jpg",
    nameTH: "Sage Rodriguez	",
    nameEN: "Doris Greene	",
    star: true,
  },
  {
    id: "FM0004",
    img: "default.jpg",
    nameTH: "Philip Chaney	",
    nameEN: "Doris Greene	",
    star: true,
  },
  {
    id: "FM0005",
    img: "default.jpg",
    nameTH: "first",
    nameEN: "first",
    star: false,
  },
];
var GalleryArray = [
  {
    img: "default.jpg",
  },
  {
    img: "default.jpg",
  },
  {
    img: "default.jpg",
  },
  {
    img: "default.jpg",
  },
  {
    img: "default.jpg",
  },
];
const MenuArray = [
  {
    src: require('./assets/img/vw1.jpg'),
    altText: 'Slide 1',
    header: 'Main course',
    text: 'PanProk',
    detail: 'Jai Bang Set',
   
  },
  {
    src: require('assets/img/vw1.jpg'),
    altText: 'Slide 2',
    header: 'Main course',
    text: 'PanProk',
    detail: 'Jai Thung Set',
  },
  {
    src: require('assets/img/vw1.jpg'),
    altText: 'Slide 3',
    header: 'Main course',
    text: 'PanProk',
    detail: 'Jai Purn Set'
  },
  {
    src: require('assets/img/ds.jpg'),
    altText: 'Slide 4',
    header: 'Dessert',
    text: 'Cake',
    detail: 'Strawberry'
  },
  {
    src: require('assets/img/cola.jpg'),
    altText: 'Slide 4',
    header: 'Drink',
    text: 'soft drink',
    detail: 'Coca-Cola'
  },
  {
    src: require('assets/img/herder/slide2.jpg'),
    altText: 'Slide 4',
    header: 'Drink',
    text: 'beer',
    detail: 'Chang'
  }
];
module.exports = {
  FoodMenuTH,
  FoodMenuTD,
  GalleryArray,
  MenuArray,
};

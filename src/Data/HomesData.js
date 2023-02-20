import Image1 from "../Assets/img/image1.jpg";
import Image2 from "../Assets/img/image2.jpg";
import Image3 from "../Assets/img/image3.jpg";
import Image4 from "../Assets/img/image4.jpg";

import Image5 from "../Assets/image5.jpg";
import Image6 from "../Assets/image6.jpg";
import Image7 from "../Assets/image7.jpg";
import Image11 from "../Assets/image11.jpg";
import Image12 from "../Assets/image12.jpg";
import Image13 from "../Assets/image13.jpg";
import Image14 from "../Assets/image14.jpg";
import Image15 from "../Assets/image15.jpg";
import Image16 from "../Assets/image16.jpg";
import Image17 from "../Assets/image17.jpg";
import Image18 from "../Assets/image18.jpg";
import Image19 from "../Assets/image19.jpg";
import Image20 from "../Assets/image20.jpg";
import Image21 from "../Assets/image21.jpg";
import Image22 from "../Assets/image22.jpg";
import Image23 from "../Assets/image23.jpg";
import Image24 from "../Assets/image24.jpg";
import Image25 from "../Assets/image25.jpg";
import Image26 from "../Assets/image26.jpg";
import Image27 from "../Assets/image27.jpg";

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return [...new Set(unique)];
};

export const homesDataObject = [
  {
    title: "Zemmat, Switzerland ",
    price: 54200000,
    rentalPrice: 40000,
    locality: "Zemmat",
    description: "Lorem",
    img: Image1,
    imageS: [
      { img: Image1 },
      { img: Image2 },
      { img: Image3 },
      { img: Image4 },
 
    ],
  },
  {
    title: "Paris, France",
    price: 27000000,
    rentalPrice: 500000,
    locality: "France",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos. ",
    img: Image2,
    id: "2",
    images: [
      { img: Image2 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "São Paulo, Brazil",
    price: 17000000,
    rentalPrice: 100000,
    locality: "Brazil",
    rental: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image3,
    id: "3",
    images: [
      { img: Image3 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "California, USA",
    price: 80000000,
    rentalPrice: 500000,
    locality: "USA",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image4,
    id: "4",
    images: [
      { img: Image4 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Miami, USA",
    price: 45000000,
    rentalPrice: 220000,
    locality: "USA",
    rental: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image5,
    id: "5",
    images: [
      { img: Image5 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "California, USA",
    price: 12990000,
    rentalPrice: 250000,
    locality: "USA",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image6,
    id: "6",
    images: [
      { img: Image6 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "San Antonio, USA",
    price: 110200000,
    rentalPrice: 270000,
    locality: "USA",
    rental: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image7,
    id: "7",
    images: [
      { img: Image7 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Tokyo, Japan",
    price: 3800000,
    rentalPrice: 14000,
    locality: "Japan",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image11,
    id: "8",
    images: [
      { img: Image11 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Paraná, Brazil",
    price: 64500000,
    rentalPrice: 50000,
    locality: "Brazil",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image12,
    id: "9",
    images: [
      { img: Image12 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Lisbon, Portugal",
    price: 412000000,
    rentalPrice: 3000000,
    locality: "Portugal",
    rental: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image13,
    id: "10",
    images: [
      { img: Image13 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Venice, Italy",
    price: 62500000,
    rentalPrice: 280000,
    locality: "Italy",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image14,
    id: "11",
    images: [
      { img: Image14 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Berlim, German",
    price: 10000000,
    rentalPrice: 70000,
    locality: "German",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image15,
    id: "12",
    images: [
      { img: Image15 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Rome, Italy",
    price: 1520000,
    rentalPrice: 10000,
    locality: "Italy",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image16,
    id: "13",
    images: [
      { img: Image16 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Prague, Portugal",
    price: 101500000,
    rentalPrice: 850000,
    locality: "Portugal",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image17,
    id: "14",
    images: [
      { img: Image17 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "New York, USA",
    price: 2500000,
    rentalPrice: 42000,
    locality: "USA",
    rental: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image18,
    id: "15",
    images: [
      { img: Image18 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Florence, Italy",
    price: 4000000,
    rentalPrice: 30000,
    locality: "Italy",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image19,
    id: "16",
    images: [
      { img: Image19 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Surabaya, Insonesia",
    price: 75000000,
    rentalPrice: 700000,
    locality: "Indonesia",
    rental: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image20,
    id: "17",
    images: [
      { img: Image20 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Braganca, Portugal",
    price: 105990000,
    rentalPrice: 900000,
    locality: "Portugal",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image21,
    id: "18",
    images: [
      { img: Image21 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Lyon, France",
    price: 2000000,
    rentalPrice: 12000,
    locality: "France",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image22,
    id: "19",
    images: [
      { img: Image22 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: "Osaka, Japan",
    price: 46890000,
    rentalPrice: 110000,
    locality: "Japan",
    rental: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.",
    img: Image23,
    id: "20",
    images: [
      { img: Image23 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
];

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
};

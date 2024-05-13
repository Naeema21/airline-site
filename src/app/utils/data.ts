import {
  destination01,
  destination02,
  destination03,
  destination04,
  destination05,
  destination06,
  destination07,
  destination08,
  destination09,
  destination10,
  destination11,
  destination12,
  icon1,
  icon2,
  icon3,
  icon4,
  recommended1,
  recommended2,
  recommended3,
  recommended4,
} from "./images";

export const recommendedCardData = [
  {
    imgSrc: recommended1,
    title: "The Montcalm At Brewery London City",
    location: "Westminster Borough, London",
    rating: "4.8",
    reviews: "3,014",
    price: "US$72",
    offerTag: "Best Deal",
    tagColor: "bg-warning",
  },
  {
    imgSrc: recommended2,
    title: "Flying Over Bali",
    location: "Beautiful Lands, Indonesia",
    rating: "4.7",
    reviews: "4,114",
    price: "US$89",
    offerTag: "Best Deal",
    tagColor: "bg-info",
  },
  {
    imgSrc: recommended3,
    title: "American Landscapes",
    location: "Pestminster Worough, USA",
    rating: "4.9",
    reviews: "3,894",
    price: "US$88",
    offerTag: "Best Deal",
    tagColor: "bg-success",
  },
  {
    imgSrc: recommended4,
    title: "The Beauty of Scotland",
    location: "Mestminster Gorough, UK",
    rating: "4.5",
    reviews: "2,914",
    price: "US$69",
    offerTag: "Best Deal",
    tagColor: "bg-primary", // Change color as needed
  },
];

export const destinationData = [
  { imgSrc: destination01, destination: "Hawai", hotels: 12683 },
  { imgSrc: destination02, destination: "Turkey", hotels: 12683 },
  { imgSrc: destination03, destination: "Paris", hotels: 12683 },
  { imgSrc: destination04, destination: "Maldives", hotels: 12683 },
  { imgSrc: destination05, destination: "Australia", hotels: 12683 },
  { imgSrc: destination06, destination: "Rome", hotels: 12683 },
  { imgSrc: destination07, destination: "England", hotels: 12683 },
  { imgSrc: destination08, destination: "London", hotels: 12683 },
  { imgSrc: destination09, destination: "New Zealand", hotels: 12683 },
  { imgSrc: destination10, destination: "Peru", hotels: 12683 },
  { imgSrc: destination11, destination: "France", hotels: 12683 },
  { imgSrc: destination12, destination: "Paris", hotels: 12683 },
];

export const routesData = [
  {
    image: icon1,
    departureTime: "14:00",
    departureAirport: "DEL",
    duration: "4h 05m - Nonstop",
    arrivalTime: "22:00",
    arrivalAirport: "LHR",
    price: "US$934",
    deals: 16,
  },
  {
    image: icon2,
    departureTime: "12:00",
    departureAirport: "AAR",
    duration: "2h 05m - Nonstop",
    arrivalTime: "14:50",
    arrivalAirport: "LHR",
    price: "US$734",
    deals: 12,
  },
  {
    image: icon3,
    departureTime: "20:00",
    departureAirport: "DXB",
    duration: "2h 15m - Nonstop",
    arrivalTime: "22:15",
    arrivalAirport: "LHR",
    price: "US$534",
    deals: 20,
  },
  {
    image: icon4,
    departureTime: "14:00",
    departureAirport: "LAS",
    duration: "10h 00m - Nonstop",
    arrivalTime: "24:00",
    arrivalAirport: "MUM",
    price: "US$998",
    deals: 20,
  },
];

export const languageItems = [
  { label: "Russian", link: "#" },
  { label: "French", link: "#" },
];

export const currencyItems = [
  { label: "USD", link: "#" },
  { label: "EUR", link: "#" },
];

export const userItems = [
  { label: "Sign in", link: "#" },
  { label: "Register", link: "#" },
];

export const searchOption = [
  "San Francisco",
  "New York",
  "Seattle",
  "Los Angeles",
  "Chicago",
];

const listings = [
  {
    id: 201,
    title: "Cat",
    images: [{ fileName: "cat1" }],
    price: 100,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Test",
    images: [{ fileName: "flower" }],
    categoryId: 3,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Cat 6 years old",
    description:
      "I'm selling my cat",
    images: [
      { fileName: "flower" },
      { fileName: "cat2" },
      { fileName: "cat1" },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Persian Cat",
    images: [{ fileName: "cat2" }],
    categoryId: 1,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Dog",
    images: [{ fileName: "dog1" }],
    price: 300,
    categoryId: 2,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Dog",
    images: [{ fileName: "dog2" }],
    price: 350,
    categoryId: 2,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};

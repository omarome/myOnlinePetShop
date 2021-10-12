const categories = [
  {
    id: 1,
    name: "Cats",
    icon: "cat",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Dogs",
    icon: "dog",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Hamisters",
    icon: "",
    backgroundColor: "#fed330",
    color: "white"
  },
 {
    id: 4,
    name: "Birds",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white"
  },
  {
    id: 5,
    name: "Other",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white"
  },

  
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};

const CATEGORIES = [
  {
    id: '1',
    name: 'Cities',
  },
  {
    id: '2',
    name: 'Food',
  },
  {
    id: '3',
    name: 'Animals',
  },
];

const categoriesApi = () => {
  return new Promise(resolve => {
    resolve(CATEGORIES);
  });
};

export default categoriesApi;

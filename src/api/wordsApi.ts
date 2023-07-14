const WORDS = [
  {
    id: 'wordId1',
    categoryId: '1',
    puzzle: [
      {
        word: 'singapore',
        description: 'Capital of Singapore?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
      {
        word: 'mexicocity',
        description: 'What is the capital of Mexico?',
        complexityLevel: 'Easy',
        complexityPoints: 1,
      },
      {
        word: 'paris',
        description: 'What is the capital of France?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
    ],
  },
  {
    id: 'wordId2',
    categoryId: '2',
    puzzle: [
      {
        word: 'soyabean',
        description:
          'What bean originating in East Asia is used for making oil, miso, and tofu?',
        complexityLevel: 'Hard',
        complexityPoints: 3,
      },
      {
        word: 'sugar',
        description: 'In Indian cooking, what ingredient is called “jaggery”?',
        complexityLevel: 'Easy',
        complexityPoints: 1,
      },
      {
        word: 'strawberry',
        description: 'Name the only fruit with seeds on the outside.',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
    ],
  },
  {
    id: 'wordId3',
    categoryId: '3',
    puzzle: [
      {
        word: 'elephant',
        description: 'What is the only mammal that can’t jump?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
      {
        word: 'panda',
        description: 'What animal eats mainly bamboo',
        complexityLevel: 'Hard',
        complexityPoints: 3,
      },
      {
        word: 'tiger',
        description:
          'Which animal’s stripes are on their skin as well as their fur?',
        complexityLevel: 'Easy',
        complexityPoints: 1,
      },
    ],
  },
];

const wordsApi = (categoryId: string) => {
  const puzzle = WORDS.find(word => word.categoryId === categoryId)?.puzzle;
  return new Promise(resolve => {
    resolve(puzzle ?? []);
  });
};

export default wordsApi;

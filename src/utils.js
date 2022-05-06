import faker from "@faker-js/faker";

faker.seed(123);

export const data = new Array(1000).fill().map((_, id) => ({
  id: id,
  title: faker.lorem.words(5),
  body: faker.lorem.sentences(8)
}));

import { matchers } from './matchers';

beforeAll(async () => {
  try {
    /* Before all goes here */
  } catch (e) {
    console.log('error in beforeAll setupJest.ts');
    console.log(e);
    process.exit(1);
  }
});

beforeEach(async () => {
  expect.extend(matchers);
  try {
    /* Before each goes here */
  } catch (e) {
    console.log('error in beforeEach setupJest.ts')
  }
});

afterAll(async () => {
  /* Clean up */
});

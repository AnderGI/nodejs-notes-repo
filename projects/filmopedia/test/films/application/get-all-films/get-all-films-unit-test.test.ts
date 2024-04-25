import assert from "node:assert";
import test, { Mock, describe, mock } from "node:test";
import beforeEach from "node:test";
import { Film } from "../../../../src/films/domain/Film.ts";
import { GetAllFilms } from "../../../../src/films/domain/repository/GetAllFilmsRepository.ts";
import {getAllFilms} from "../../../../src/films/application/get-all-films/get-all-films.ts";
import { fakeFilms } from "./fakeTestData.ts";

// Test the use case of getAllFilms function
// For that and knowing that I still do not have a GetAllFilmsRepositoy I am going to mock it
describe("Get All Films Use Case Unit Tester", () => {
  
  let mockRepo: Mock<GetAllFilms>;

  // beforeEach is not being correctly imported therefore I will create a funcion to setup the mockRepo each test call
  const mockRepoBeforeEachSetUp = (cb: () => Promise<Film[]>) : void => {
    mockRepo = mock.fn(cb)
  }
  
  test("Calls getAllFilms function use case", () => {
    mockRepoBeforeEachSetUp(() => Promise.resolve([]));
    // No calls
    assert.strictEqual(mockRepo.mock.calls.length, 0);
    // Here it is being called once
    getAllFilms(mockRepo)();
    // Once
    assert.strictEqual(mockRepo.mock.calls.length, 1);
  });


  test('If function is being called with the right arguments', async () => {
    // Set up mock
    mockRepoBeforeEachSetUp(() => Promise.resolve(fakeFilms));
    // Use case
    getAllFilms(mockRepo)();
    // Check calls
    const call =  await mockRepo.mock.calls[0];
    assert.deepStrictEqual(call.arguments, []);
  })
  
  test('If returned data length equals to the expected one', async () => {    
    // Set uo mock
    mockRepoBeforeEachSetUp(() => Promise.resolve(fakeFilms));
    // Use case
    getAllFilms(mockRepo)();
    // Get the call result, which is a Promise that holds another promise with an Film[] in the result property 
    const call =  await mockRepo.mock.calls[0];
    const callResult:(Film[] | undefined)= await call.result;
    // Check 
    await assert.strictEqual(callResult?.length, fakeFilms.length)
  })

  test('If returned data is an array', async () => {
    // Set up mock
    mockRepoBeforeEachSetUp(() => Promise.resolve(fakeFilms));
    // Use case
    getAllFilms(mockRepo)();
    // Get the results
    const call =  await mockRepo.mock.calls[0];
    const callResult:(Film[] | undefined)= await call.result;
    // Check
    assert.strictEqual(Array.isArray(callResult), true);
    
  })

  test('If returned data deeply equals to the expected one', async () => {
    // Set up repo
    mockRepoBeforeEachSetUp(() => Promise.resolve(fakeFilms));
    // Use case
    getAllFilms(mockRepo)();
    // Get result
    const call =  await mockRepo.mock.calls[0];
    const callResult:(Film[] | undefined)= await call.result;
    // Check
    callResult?.forEach((film:Film, index:number) => {
      assert.deepStrictEqual(film, fakeFilms[index])
    })
  })
});

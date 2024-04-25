import assert from "node:assert";
import test, { Mock, describe, mock } from "node:test";
import { Film } from "../../../../src/films/domain/Film.ts";
import { GetAllFilms } from "../../../../src/films/domain/repository/GetAllFilmsRepository.ts";
import {getAllFilms} from "../../../../src/films/application/get-all-films/get-all-films.ts";
import { fakeFilms } from "./fakeTestData.ts";

// Test the use case of getAllFilms function
// For that and knowing that I still do not have a GetAllFilmsRepositoy I am going to mock it
describe("Get All Films Use Case Unit Tester", () => {
  
  test("Calls getAllFilms function use case", () => {
    const mockRepo: Mock<GetAllFilms>  = mock.fn(() => Promise.resolve([]));
    // No calls
    assert.strictEqual(mockRepo.mock.calls.length, 0);
    // Here it is being called once
    getAllFilms(mockRepo)();
    // Once
    assert.strictEqual(mockRepo.mock.calls.length, 1);
  });

  test('getAllFilms returns a list of films', async () => {
    // Pattern for creating fake test data ¿?
    const expectedFilms: Film[] = fakeFilms;
    const mockRepo: Mock<GetAllFilms>  = mock.fn(() => Promise.resolve(expectedFilms));
    getAllFilms(mockRepo)();
    // Problem -> In runtime I cannot validate TS types
    const call =  await mockRepo.mock.calls[0]; // Only called once
    // However, I can validate
    // If it is being called with the expected arguments
    assert.deepStrictEqual(call.arguments, []); // mock repo is being called with no arguments
 
    const callResult:(Film[] | undefined)= await call.result;
    
    // If returned data equlas the expected one
    await assert.strictEqual(callResult?.length, expectedFilms.length)
    // If data returned is an array
    await assert.strictEqual(Array.isArray(callResult), true);

    // If the films of the expected data are equal to the ones from the returned array
    callResult?.forEach((film:Film, index:number) => {
      assert.deepStrictEqual(film, fakeFilms[index])
    })
  })

});

import assert from "node:assert";
import test, { Mock, describe, mock } from "node:test";
import { GetAllFilms } from "../../../../src/films/domain/repository/GetAllFilmsRepository.ts";
import { log } from "node:console";



describe("Get All Films Unit Tester", () => {
  
  test("Return a list of cars", async () => {
    const expectedFilms: String[] = ['Film 1', 'Film 2', 'Film 3'];
    const mockRepo: Mock<GetAllFilms>  = mock.fn(() => Promise.resolve(expectedFilms));
    
    // Llamar al mock y verificar las llamadas
    const films = await mockRepo();
    
    assert.deepStrictEqual(films, expectedFilms);
  });

  test('Get all films use cased is called one time', async () => {
    const mockRepo: Mock<GetAllFilms> = mock.fn(() => new Promise((resolve, reject) => resolve([])))
    await mockRepo();
    log(mockRepo.mock.calls.length)
  })
});

import { Film } from "../../domain/Film.ts";
import { GetAllFilms } from "../../domain/repository/GetAllFilmsRepository.js";

export const getAllFilms = (repository:GetAllFilms) => {
    return async function (): Promise<Film[]> {
        return await repository();
    }
}
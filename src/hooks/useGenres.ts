import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import useData from "./useData";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;

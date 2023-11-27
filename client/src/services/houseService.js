import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/houses";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const create = async (data) => {
  const result = await request.post(baseUrl, data)

  return result;
};

export const getOne = async (houseId) => {
  const result = await request.get(`${baseUrl}/${houseId}`, );

  return result;
};

export const remove = async (houseId) => {
    const result = await request.remove(`${baseUrl}/${houseId}`, );

    return result;
};

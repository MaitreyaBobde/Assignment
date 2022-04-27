import client from "./client";

const endpoint = "/v4/launches";
const getLaunchesApi = () => client.get(endpoint);
const getLaunchApi = (id) => client.get(endpoint + "/" + id.toString());

export default {
  getLaunchesApi,
  getLaunchApi,
};

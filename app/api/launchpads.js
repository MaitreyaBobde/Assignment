import client from "./client";

const endpoint = "/v4/launchpads";
const getLaunchpadsApi = () => client.get(endpoint);

export default {
  getLaunchpadsApi,
};

import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.spacexdata.com",
});

// apiClient.get("/v4/launchpads").then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

export default apiClient;

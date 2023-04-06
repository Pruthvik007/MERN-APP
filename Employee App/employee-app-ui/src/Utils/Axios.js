import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
export const fetch = async (ENDPOINT, METHOD, DATA) => {
  const options = {
    url: `${BASE_URL}${ENDPOINT}`,
    method: METHOD,
    data: JSON.stringify(DATA),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Authorization": "Bearer "+localStorage.getItem("accessToken"),
    },
  };

  const response = await axios(options);
  return response.data;
};

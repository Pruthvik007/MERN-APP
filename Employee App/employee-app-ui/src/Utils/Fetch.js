const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;
export async function fetchApi(url = "", methodType = "GET", data = undefined) {
  const response = await fetch(BASE_URL + url, {
    method: methodType,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export const METHOD_TYPE = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

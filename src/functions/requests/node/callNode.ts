import { Method } from "../../../types/methods";

export const callNode = async (method: Method, route: string, body?: object): Promise<any> => {
  const requestInfo = {
    method,
    headers: {
      "Content-Type": "application/json",
      mode: "cors",
    },
    body: body ? JSON.stringify(body) : null,
  };

  // try {
  const response = await fetch(route, requestInfo);

  if (response) {
    return response.json();
  }
  //     throw new Error("Something went wrong");
  //   }
  // } catch (error: any) {
  //   switch (error.response.status) {
  //     case 400:
  //       throw new Error("Bad Request");
  //     case 401:
  //       throw new Error("Unauthorized");
  //     case 403:
  //       throw new Error("Forbidden");
  //     case 404:
  //       throw new Error("Not Found");
  //     case 500:
  //       throw new Error("Internal Server Error");
  //     default:
  //       throw new Error("Something went wrong");
  //   }
  // }
};

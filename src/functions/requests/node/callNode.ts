import { Method } from "../../../types/methods";

export const callNode = async (method: Method, route: string): Promise<any> => {
  const requestInfo = {
    method,
    headers: {
      "Content-Type": "application/json",
      mode: "cors",
    },
  };

  try {
    const response = await fetch(route, requestInfo);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error: any) {
    switch (error.response.status) {
      case 400:
        throw new Error("Bad Request");
      case 401:
        throw new Error("Unauthorized");
      case 403:
        throw new Error("Forbidden");
      case 404:
        throw new Error("Not Found");
      case 500:
        throw new Error("Internal Server Error");
      default:
        throw new Error("Something went wrong");
    }
  }
};

import { Method } from "../../types/methods";
import { Services } from "../../enums/services";
import { callNode } from "./node/callNode";

export const callAPI = async (service: string, path: string, body?: object, method: Method = "GET"): Promise<any> => {
  const { REACT_APP_NODE_URL } = process.env;

  switch (service) {
    case Services.NODE:
      const nodeUrl = REACT_APP_NODE_URL;
      const nodeRoute = `${nodeUrl}/${path}`;

      if (body) {
        return await callNode(method, nodeRoute, body);
      } else {
        return await callNode(method, nodeRoute);
      }

    default:
      const url = REACT_APP_NODE_URL;
      const route = `${url}/${path}`;

      if (body) {
        return await callNode(method, route, body);
      } else {
        return await callNode(method, route);
      }
  }
};

import { API } from "./base";

export const createOrg = (data) => API.post("organization", data);
export const getOrg = (data) =>
  API.get("organization/mine?userId=" + data?.createdBy);

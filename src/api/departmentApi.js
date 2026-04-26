import { API } from "./base";

export const createDept = (data) => API.post("department", data);
export const getDept = (data) =>
  API.get("organization/mine?userId=" + data?.createdBy);
import { type TCategorySchema } from "@/typescript/interfaces/category.interface"
import AxiosInstance from "../axios-instance/axiosInstance";
import { endpoints } from "../endpoints/endpoints";

export const getCategoryList = async () => {
  const res = await AxiosInstance.get<TCategorySchema["IcategoryResponse"]>(
    endpoints.categories.list
  );

  console.log(res,"ami response")

  return res.data;
};

export const createCategory = async (
  data: TCategorySchema["ICategoryAddPayload"]
) => {
  const res = await AxiosInstance.post(endpoints.categories.list, data);

  return res.data;
};

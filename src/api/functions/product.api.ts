import axios from "axios";
import { type TProductSchema } from "../../typescript/interfaces/product.api";
import AxiosInstance from "../axios-instance/axiosInstance";
import { endpoints } from "../endpoints/endpoints";

export const fetchproductList = async ({
  title,
  categoryId,
  offset,
  limit,
}: {
  title: string;
  categoryId?: number;
  offset: number;
  limit: number;
}) => {
  const res = await axios.post<TProductSchema["IProductResponse"]>(
    "/api/product",
    {
      data: {
        title,
        categoryId,
        offset,
        limit,
      },
    }
  );
  return res.data;
};

export const fetchProductDetails = async (id: number) => {
  const res = await AxiosInstance.get(endpoints.product.details(id));

  return res.data;
};

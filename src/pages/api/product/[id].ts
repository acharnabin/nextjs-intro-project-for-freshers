// /api/products

import AxiosInstance from "@/api/axios-instance/axiosInstance";
import { endpoints } from "@/api/endpoints/endpoints";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

// interface IProduct {
//   name: string;
//   price: number;
// }

// 200-205 -> sucess full
// 300 -> url a -> url b
// 400 , 500 -> server error

export default async function productdetails(
  request: NextRequest,
  response: NextApiResponse
) {
  try {
    const id = request?.query?.id;
  
    const res = await AxiosInstance.get(endpoints.product.details(Number(id)));

    return response.status(200).send(res.data);
  } catch (error) {
    return response.status(400).send({
      error,
    });
  }
}

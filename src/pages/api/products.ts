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

export default async function products(
  request: NextRequest,
  response: NextApiResponse
) {
  console.log(request);
  try {
    const res = await AxiosInstance.get(endpoints.product.list, {
      params: request.body,
    });

    return response.status(200).send(res.data);
  } catch (error) {
    
    return response.status(400).send({
      error,
    });
  }
}

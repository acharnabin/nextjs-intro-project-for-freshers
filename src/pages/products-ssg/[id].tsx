// product-ssg/abc

import {
  fetchProductDetails,
  fetchproductList,
} from "@/api/functions/product.api";
import React from "react";

// abc , 123 , xyz

// list api call korbo
export const getStaticPaths = async () => {
  const response = await fetchproductList({
    title: "",
    limit: 20,
    offset: 10,
  });

  const paths = response.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  console.table(paths);

  return {
    paths,
    // false
    fallback:true
  };
};

// 2nd step
// details api gulo call korbo
export const getStaticProps = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const response = await fetchProductDetails(Number(params?.id));

  return {
    props: {
      details: response,
    },
  };
};

const ProductDetailsPage = ({ details }) => {
  return <div>{JSON.stringify(details)}</div>;
};

export default ProductDetailsPage;

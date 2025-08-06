import { fetchProductDetails } from "@/api/functions/product.api";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const Index = () => {
  const params = useParams();

  const { data,isFetching } = useQuery({
    queryKey: ["product-details", params?.id],
    queryFn: () => fetchProductDetails(Number(params?.id)),
    enabled: Boolean(params?.id),
  });

  return <div>{isFetching?<CircularProgress/>:JSON.stringify(data)}</div>;
};

export default Index;

// product-details/1

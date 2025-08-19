// /products-ssg

import { getCategoryList } from "@/api/functions/category.api";
import { fetchproductList } from "@/api/functions/product.api";
import CreateCategory from "@/components/CreateCategory";
import ProductCard from "@/components/ProductCard";
import useDebounce from "@/hooks/useDebounce";
import { TProductSchema } from "@/typescript/interfaces/product.api";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// SSR
export const getServerSideProps = async () => {
  const response = await fetchproductList({
    title: "",
    limit: 20,
    offset: 10,
  });

  // await new Promise((resolve) => setTimeout(resolve, 10000));

  return {
    props: {
      productList: response,
    },
  };
};

interface IHomeProps {
  productList: TProductSchema["IProductResponse"];
}

function Home({ productList }: IHomeProps) {
  // use query hook use korbo

  const [count, setCount] = useState(0);
  const [categoryId, setcategoryId] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);

  const [search, setSearch] = useState("");
  const _debounceValue = useDebounce(search);

  const { data: categoryData } = useQuery({
    queryKey: ["category-list"],
    queryFn: getCategoryList,
  });

  const { data, isLoading, error, refetch, status } = useQuery({
    // search chnage holei api call ta abar hobe
    queryKey: ["product-list", count, _debounceValue, categoryId, offset],
    // axios fn ta akane pass kogit rte hbe
    queryFn: () =>
      fetchproductList({
        title: _debounceValue,
        ...(categoryId === null
          ? {}
          : {
              categoryId,
            }),
        limit: 20,
        offset: offset * 10,
      }),
    initialData: productList,
  });

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={2}
      >
        <Typography variant="h4" fontWeight={600}>
          Product Listing with useQuery -{status}
        </Typography>

        <Button component={Link} href="/about" variant="outlined" size="small">
          About Page
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid size={7} padding={1}>
          <h1>current page - {offset}</h1>
          <Grid size={12}>
            <Pagination
              count={10}
              page={offset}
              onChange={(e, pageNo) => setOffset(pageNo)}
            />
          </Grid>
          {isLoading ? (
            <Box display="flex" justifyContent="center" mt={5}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error" align="center" mt={5}>
              Something went wrong. Please try again.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {data?.map((item) => (
                <Grid size={4} key={item?.id}>
                  <Link href={`/products-ssg/${item?.id}`}>
                    <h1>{item?.title}</h1>
                  </Link>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

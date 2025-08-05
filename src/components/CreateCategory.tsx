import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { createCategory } from "../api/functions/category.api";
import { toast } from "react-hot-toast";

const categorySchema = z.object({
  name: z.string().trim().min(5),
  image: z.string().trim().url(),
});

type TcategorySchema=z.infer<typeof categorySchema>

const CreateCategory = () => {
  // const [x]=useState("test")
  const x='test'


  console.log(x)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });
  const queryClient = useQueryClient();

  // useQuery -> get ,post , put , delete 



  // useMutation
  const { mutate, isPending } = useMutation({
    mutationFn: createCategory,
    mutationKey: ["create-category"],

    onSuccess: () => {
      toast.success("Category added successfully");
      queryClient.invalidateQueries({
        queryKey: ["category-list"],
      });
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit:SubmitHandler<TcategorySchema> = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log(data)
         toast.success(`${data?.name} added successfully`);
        console.log("swuccess");
      },
    });
  };

  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Typography>Create Category</Typography>

        <Stack spacing={1} component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            placeholder="Name"
            {...register("name")}
            error={Boolean(errors?.name)}
            helperText={errors?.name?.message}
          />
          <TextField
            placeholder="Enter image url"
            {...register("image")}
            error={Boolean(errors?.image)}
            helperText={errors?.image?.message}
          />

          <Button loading={isPending} variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CreateCategory;

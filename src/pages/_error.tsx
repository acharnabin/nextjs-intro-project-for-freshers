import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import custom404Lottie from "@/lottie/404.json";

const Index = () => {
  return (
    <Stack>
      <Lottie height={100} width={100} animationData={custom404Lottie} />
      <Typography variant="h1">Something went wrong</Typography>
      <Button onClick={() => window.location.reload()}>Reload</Button>
    </Stack>
  );
};

export default Index;

import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCount } from "../components/counter/counterSlice";

const NewPage = () => {
  const count = useSelector(selectCount);
  return (
    <div>
      <Typography variant="h2"> Hello World,{count} </Typography>
    </div>
  );
};

export default NewPage;

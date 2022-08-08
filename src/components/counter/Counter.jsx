import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import "./styles.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateNewPage = () => {
    navigate("/new");
  };

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <Typography variant="body1"> - </Typography>
        </button>

        <span>{count}</span>

        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <Typography variant="body1"> + </Typography>
        </button>
        <button className="button" onClick={navigateNewPage}>
          <Typography variant="body1"> New page </Typography>
        </button>
      </div>
    </div>
  );
}

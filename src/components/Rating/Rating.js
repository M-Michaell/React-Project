import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function Rating2(props) {
  const { item } = props;
  return (
    <Rating
      style={{ color: "black" }}
      name="text-feedback"
      value={item.vote_average / 2}
      readOnly
      precision={0.2}
      emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />}
    />
  );
}

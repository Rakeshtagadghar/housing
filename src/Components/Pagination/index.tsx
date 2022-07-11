import React from "react";
import Pagination from "@mui/material/Pagination";
import Center from "../../Styles";

const Pages = (props: any) => {
  const { page, handleChange, count } = props;
  return (
    <Center>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Center>
  );
};
export default Pages;

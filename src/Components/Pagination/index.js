import Pagination from "@mui/material/Pagination";
import Center from "../../Styles";

const Pages = ({ page, handleChange, count }) => {
  return (
    <Center>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Center>
  );
};
export default Pages;

import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButtonMain = styled(Button)({
  borderRadius: "5px",
  padding: "15px 30px",
  transition: "all .3s",

  "&:hover": {
    backgroundImage:
      "linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%)",
    transition: "all .3s",
  },
});

const ButtonMain = () => {
  return (
    <StyledButtonMain variant="contained">Request beta access</StyledButtonMain>
  );
};

export default ButtonMain;

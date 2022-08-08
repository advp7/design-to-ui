import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonTop = styled(Button)({
  borderRadius: "5px",
  padding: "12px 24px",

  "&:hover": {
    color: "white",
    backgroundColor: "#172339",
  },
});

const ButtonTop = () => {
  return (
    <StyledButtonTop
      variant="outlined"
      sx={{
        padding: { xs: "12px 16px", sm: "12px 24px" },
        fontSize: { xs: "12px", sm: "16px" },
      }}
    >
      Request beta access
    </StyledButtonTop>
  );
};

export default ButtonTop;

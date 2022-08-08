import { Container, Grid } from "@mui/material";
import { ReactComponent as Logo } from "../assets/logo.svg";
import ButtonTop from "./buttons/button-top";

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "50px 0 100px 0" }}
      >
        <Grid item xs={3.5}>
          <Logo />
        </Grid>
        <Grid item container xs={8.5} sx={{ justifyContent: "right" }}>
          <ButtonTop />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;

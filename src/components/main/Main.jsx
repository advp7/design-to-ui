import { Container, Grid, CardMedia, Typography } from "@mui/material";
import phoneImage from "../../assets/image-hero-landscape@2x.webp";
import { ReactComponent as Curve } from "../../assets/pattern-curved-line-1.svg";
import "./styles.css";
import heroImage from "../../assets/image-hero-portrait@2x.webp";
import ButtonMain from "./../buttons/button-main";

const Main = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: "100px" } }}>
      <Grid container>
        <Grid
          item
          md={10}
          sm={12}
          xs={12}
          sx={{
            marginBottom: { xs: "50px", sm: "100px", md: "50px" },
            padding: { md: "80px 0", sm: "20px 0" },
            backgroundImage: { xs: "none", sm: `url(${heroImage})` },
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: { sm: "400px", md: "404px" },
          }}
        >
          <div className="hero-svg">
            <Curve />
          </div>

          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "38px", sm: "56px", md: "72px" } }}
          >
            A <strong>super solution</strong> <br /> for your
            <strong> business.</strong>
          </Typography>
          <div className="hero-p">
            <Typography variant="body1">
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </Typography>
          </div>
          <ButtonMain />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: { sm: "none" }, marginBottom: "56px" }}
        >
          <CardMedia component="img" image={phoneImage} alt="hero phone" />
        </Grid>
        <Grid
          rowSpacing={4}
          item
          container
          md={1.5}
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ padding: { md: "100px 0" } }}
        >
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              2K+
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              companies
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              8
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              languages
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              1.2M
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              leads
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;

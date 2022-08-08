import { Grid, Card, CardMedia, Container, Typography } from "@mui/material";
import { ReactComponent as LilCurve } from "../../assets/pattern-curved-line-2.svg";
import { ReactComponent as Blur } from "../../assets/pattern-blur.svg";
import jeremyImage from "../../assets/image-jeremy-large@2x.webp";
import "./styles.css";

const Person = () => {
  return (
    <>
      <Container maxWidth="lg">
        <CardMedia
          component="img"
          image={jeremyImage}
          alt="jeremy"
          sx={{
            height: "589px",
            width: "auto",
            position: "relative",

            top: { md: "542px", xs: "442px" },
            left: { md: "50px", xs: "0" },
            margin: { xs: "0px auto", md: "0 0" },
            marginTop: { xs: "-442px", md: "-542px" },
            maginLeft: "-45px",
            overflow: "visible",
            zIndex: "3",
          }}
        />
      </Container>

      <Container maxWidth="lg">
        <Card>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={4}
            sx={{
              padding: {
                xs: "50px 16px",
                sm: "50px 58px",
                md: "50px 125px 50px 125px",
              },

              zIndex: 3,
            }}
          >
            <Grid item xs={12} md={5}>
              <div className="blur">
                <Blur />
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="lil-curve">
                <LilCurve />
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                  fontWeight: "400",
                  marginBottom: "40px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                It just <strong>works.</strong>
              </Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: "40px" }}>
                “I really like how it is an all-in-one solution that handle many
                of the tasks that you would normally need separate tools to do
                the same job. This thing is a miracle worker.”
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                sx={{
                  textTransform: "uppercase",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Jeremy Robinson
              </Typography>
              <Typography
                variant="body2"
                color="#F3EDE7"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                CMO, Fylo
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Person;

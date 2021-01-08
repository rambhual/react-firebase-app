import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import useStyles from "./styles";

export default function Home(props) {
  const classes = useStyles();

  const content = {
    header: "The New Internet",
    description:
      "The PiperNet is on it's way to revolutionize every smartphone, PC, and smart-fridge near you.",
    "primary-action": "Sign up for free",
    "secondary-action": "Read more",
    video: "https://www.youtube.com/embed/OtDxDvCpPL4",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box className={classes.contentBox}>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                {content["header"]}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph={true}>
                {content["description"]}
              </Typography>
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.primaryAction}
                >
                  {content["primary-action"]}
                </Button>
                <Button variant="contained" className={classes.secondaryAction}>
                  {content["secondary-action"]}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box className={classes.videoBoxRoot}>
              <Card className={classes.cardRoot}>
                <CardMedia
                  className={classes.cardMedia}
                  component="iframe"
                  src={content["video"]}
                />
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

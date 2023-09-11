import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Container";
import Link from "@mui/material/Link";
import Resume from "../assets/resume.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function MultiActionAreaCard() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const cardMediaWidth = isMobile ? "100%" : "50vw";
  const theme = useTheme();

  const Projects = Resume.projects.map((project, index) => (
    <Grid
      item
      style={{
        display: "flex",
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "10px",
        maxWidth: "70vw",
      }}
    >
      <Card
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "2vh",
          mb: "2vh",
        }}
      >
        <Box width={cardMediaWidth} sx={{ mr: 10 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="text.secondary"
                sx={{
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                }}
              >
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
            >
              <Button size="small">{project.url_name}</Button>
            </Link>
          </CardActions>
          {isMobile && (
            <Box
              width="40vw"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={require("../assets/logo_transparent.png")}
                alt="Personal Website"
              />
            </Box>
          )}
        </Box>
        {!isMobile && (
          <Box
            width="10vw"
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "auto",
            }}
          >
            <CardMedia
              component="img"
              image={require("../assets/logo_transparent.png")}
              alt="Personal Website"
            />
          </Box>
        )}
      </Card>
    </Grid>
  ));
  return (
    <Grid
      container
      alignItems="stretch"
      sx={{
        mt: "18vh",
        maxWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      {Projects}
    </Grid>
  );
}

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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { GradientColorSVG } from "../components/utils/GradientSVG.js";

export default function MultiActionAreaCard() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const cardMediaWidth = isMobile ? "100%" : "70%";
  const images = require.context("..", true);
  document.title = `Projects | ${Resume.basics.name}`;

  const Projects = Resume.projects.map((project, index) => (
    <Link
      key={`${project.name}_${index}`}
      href={project.routername}
      rel="noopener noreferrer"
      underline="none"
    >
      <Grid
        item="true"
        style={{
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "10px",
          maxWidth: "60vw",
          marginBottom: "5vh",
          marginTop: "5vh",
        }}
        sx={{
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "background.infobox",
            "& .MuiIcon-OpenInNew": {
              fill: "url(#linearGradientColor)",
            },
          },
        }}
      >
        <Card
          elevation={0}
          sx={{
            display: !isMobile ? "flex" : undefined,
            justifyContent: "space-between",
            mt: "2vh",
            mb: "2vh",
            backgroundColor: "inherit",
          }}
        >
          <Box width={cardMediaWidth} sx={{ mr: 10 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name} <GradientColorSVG />
                  <OpenInNewIcon
                    fontSize="small"
                    className="MuiIcon-OpenInNew"
                  />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link
                href={project.url}
                as="a"
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
                display="flex"
                justifyContent="flex-end"
                justify="flex-end"
                width="50%"
                sx={{
                  display: "flex",
                }}
              >
                <CardMedia
                  component="img"
                  image={images(`./${project.logo}`)}
                  alt={project.name}
                />
              </Box>
            )}
          </Box>
          {!isMobile && (
            <Box
              display="flex"
              justifyContent="flex-end"
              minwidth="10vw"
              maxWidth="10vw"
              justify="flex-end"
              alignItems="center"
              sx={{
                display: "flex",
                ml: "auto",
              }}
            >
              <CardMedia
                component="img"
                image={images(`./${project.logo}`)}
                alt={project.name}
              />
            </Box>
          )}
        </Card>
      </Grid>
    </Link>
  ));
  return (
    <Grid
      container="true"
      sx={{
        mt: "18vh",
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "primary.main",
      }}
    >
      <Typography gutterBottom variant="h2" sx={{ color: "text.primary" }}>
        Projects
      </Typography>
      {Projects}
    </Grid>
  );
}

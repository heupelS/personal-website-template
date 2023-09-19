import React from "react";
import { useParams } from "react-router-dom";
import Resume from "../assets/resume.json";
import { Container, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import MyTable from "../components/utils/Table";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ProjectFooter } from "../components/ProjectFooter";

function ProjectStructure({ projectData }) {
  const theme = useTheme();
  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    verticalAlign: "middle",
  };

  const borderedTypographyStyle = {
    border: `2px solid ${theme.palette.primary.main}`,
    background: "inherit",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    marginRight: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  document.title = `${projectData.name} | ${Resume.basics.name}`;
  return (
    <>
      <List>
        {projectData?._01_understand && (
          <ListItem>
            <ListItemText>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={borderedTypographyStyle}>01</Typography>
                <Typography variant="h4">Understand</Typography>
              </Box>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData._01_understand}
              </Typography>
              <Typography variant="h5" sx={{ ml: "60px" }}>
                Context
              </Typography>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData.context}
              </Typography>
              <Typography variant="h5" sx={{ ml: "60px" }}>
                Problem definition
              </Typography>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData.problem_definition}
              </Typography>
            </ListItemText>
          </ListItem>
        )}
        {projectData?._02_implementation && (
          <ListItem style={listItemStyle}>
            <ListItemText>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={borderedTypographyStyle}>02</Typography>
                <Typography variant="h4">Implementation</Typography>
              </Box>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData._02_implementation}
              </Typography>
              <Typography variant="h5" sx={{ ml: "60px" }}>
                Process
              </Typography>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData.process}
              </Typography>
              <Typography variant="h6" sx={{ ml: "60px" }}>
                Planning
              </Typography>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData.planning}
              </Typography>
              <Typography variant="h6" sx={{ ml: "60px" }}>
                Requirements
              </Typography>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData.requirements}
              </Typography>
              <Typography variant="h5" sx={{ ml: "60px" }}>
                Technologies used
              </Typography>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData.technologies_used}
              </Typography>
            </ListItemText>
          </ListItem>
        )}
        {projectData?._03_evaluation && (
          <ListItem style={listItemStyle}>
            <ListItemText>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={borderedTypographyStyle}>03</Typography>
                <Typography variant="h4">Evaluation</Typography>
              </Box>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData._03_evaluation}
              </Typography>
            </ListItemText>
          </ListItem>
        )}
        {projectData?._04_deployment && (
          <ListItem style={listItemStyle}>
            <ListItemText>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={borderedTypographyStyle}>04</Typography>
                <Typography variant="h4">Deployment</Typography>
              </Box>
              <Typography variant="body2" sx={{ ml: "60px" }}>
                {projectData._04_deployment}
              </Typography>
            </ListItemText>
          </ListItem>
        )}
      </List>
    </>
  );
}

export function BackButton({ children }) {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <IconButton
        onClick={() => {
          navigate("/Projects");
        }}
        sx={{
          width: "40px",
          height: "40px",
          position: "fixed",
          margin: theme.spacing(2),
        }}
      >
        <span
          className="material-symbols-outlined"
          sx={{
            fontSize: "1.25rem",
          }}
        >
          arrow_back
        </span>
      </IconButton>
      {children}
    </>
  );
}

function ProjectDetail() {
  const { projectName } = useParams();
  const projects = Resume.projects;
  const isMobile = useMediaQuery("(max-width:600px)");
  const images = require.context("..", true);

  const projectIndex = projects.findIndex(
    (project) => project.routername === `Projects/${projectName}`
  );
  const nextProjectIndex =
    projectIndex === projects.length - 1 ? 0 : projectIndex + 1;
  const nextProjectRoutername = projects[nextProjectIndex].routername;

  const projectData = projects.find(
    (project) => project.routername === `Projects/${projectName}`
  );

  if (!projectData) {
    return <div>Coming soon...</div>;
  }

  return (
    <BackButton>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: isMobile ? "80vw" : "60vw",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            minWidth: "100%",
            minHeight: "100%",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
          alt={projectData.picture_alt_text}
          src={images(`./${projectData.picture}`)}
        />
        <Typography variant="h2" sx={{ mb: "2vh", mt: 1 }}>
          {projectData.name}
        </Typography>
        <Divider sx={{ height: 3, mb: "2vh" }} />
        <MyTable projectData={projectData} />
        <Divider sx={{ height: 3, mt: "2vh", mb: "2vh" }} />
        <ProjectStructure projectData={projectData} />
        <Divider sx={{ height: 3, mt: "2vh", mb: "2vh" }} />
        <ProjectFooter
          projects={projects}
          nextProjectRoutername={nextProjectRoutername}
          nextProjectIndex={nextProjectIndex}
        />
      </Container>
    </BackButton>
  );
}

export default ProjectDetail;

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Resume from "../assets/resume.json";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import MyGradientChip from "./GradientChip";

export default function CustomizedTimeline({ theme }) {
  theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const TimelineWorkItemsWeb = Resume.work.map((workitem, index) => {
    const isFirstItem = index === 0;

    return (
      <TimelineItem key={`${workitem.company}_${index}`}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {workitem.startDate.slice(0, 7)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          {isFirstItem ? (
            <TimelineConnector style={{ position: "relative" }}>
              <ArrowForwardIosIcon
                sx={{
                  position: "absolute",
                  right: "40%",
                  top: "5%",
                  transform: "translate(50%, -50%) rotate(-90deg)",
                }}
              />
            </TimelineConnector>
          ) : (
            <TimelineConnector />
          )}
          <TimelineDot
            variant="outlined"
            sx={
              hoveredIndex === index
                ? {
                    backgroundImage: theme.palette.background.gradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }
                : {}
            }
          >
            <i className={workitem.icon}></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            sx={{
              mx: 2,
              mt: 2,
              mb: 2,
              textAlign: "left",
              background: theme.palette.background.infobox,
            }}
            variant="outlined"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Box sx={{ marginLeft: "1vw", marginRight: "1vw" }}>
              <Typography
                variant="h4"
                component="span"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                    lg: "2rem",
                  },
                }}
              >
                {workitem.company}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {workitem.position}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 0.5,
                  },
                  mb: 1,
                  mt: 1,
                }}
              >
                {workitem.tags.map((tag, index) => (
                  <MyGradientChip key={index} label={tag} variant="outlined" />
                ))}
              </Box>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
  });

  const TimelineWorkItemsMobile = Resume.work.map((workitem, index) => {
    const isFirstItem = index === 0;

    return (
      <TimelineItem key={`${workitem.company}_${index}`}>
        <TimelineSeparator>
          {isFirstItem ? (
            <TimelineConnector style={{ position: "relative" }}>
              <ArrowForwardIosIcon
                style={{
                  color: "inherit",
                  position: "absolute",
                  right: "40%",
                  top: "5%",
                  transform: "translate(50%, -50%) rotate(-90deg)",
                }}
              />
            </TimelineConnector>
          ) : (
            <TimelineConnector />
          )}
          <TimelineDot
            variant="outlined"
            sx={{
              backgroundImage: theme.palette.background.gradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <i className={workitem.icon} style={{ color: "inherit" }}></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <Paper sx={{ mx: 2, mt: 2, mb: 2, mr: 6 }}>
          <TimelineContent>
            <Typography
              variant="h4"
              component="span"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
              }}
            >
              {workitem.company}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {workitem.position}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 0.5,
                },
              }}
            >
              {workitem.tags.map((tag, index) => (
                <MyGradientChip key={index} label={tag} variant="outlined" />
              ))}
            </Box>
          </TimelineContent>
        </Paper>
      </TimelineItem>
    );
  });

  return (
    <Box sx={{ mx: "auto", mt: "18vh", width: "100vw", height: "100vh" }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Experience
      </Typography>
      <Divider
        sx={{
          width: "40%",
          margin: "0 auto",
          height: "3px",
          borderBottomWidth: "2px",
        }}
      />

      <Grid container justifyContent="center">
        {!isMobile && (
          <Box sx={{ width: "60vw" }}>
            <Timeline position="alternate">{TimelineWorkItemsWeb}</Timeline>
          </Box>
        )}
        {isMobile && (
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
            position="right"
          >
            {TimelineWorkItemsMobile}
          </Timeline>
        )}

        <Typography variant="h4">{Resume.work.name}</Typography>
      </Grid>
    </Box>
  );
}

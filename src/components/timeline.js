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

export default function CustomizedTimeline() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const TimelineWorkItemsWeb = Resume.work.map((workitem, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === Resume.work.length - 1;

    return (
      <TimelineItem key={workitem.company}>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {workitem.startDate.slice(0, 7)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          {!isFirstItem && <TimelineConnector />}
          <TimelineDot />
          {!isLastItem && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            variant="h6"
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
          <Typography>{workitem.position}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });

  const TimelineWorkItemsMobile = Resume.work.map((workitem, index) => {
    const isFirstItem = index === 0;
    const isLastItem = index === Resume.work.length - 1;

    return (
      <TimelineItem key={workitem.company}>
        <TimelineSeparator>
          {!isFirstItem && <TimelineConnector />}
          <TimelineDot />
          {!isLastItem && <TimelineConnector />}
        </TimelineSeparator>
        <Paper sx={{ mx: 2, mt: 2, mb: 2 }}>
          <TimelineContent>
            <Typography
              variant="h6"
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
            <Typography>{workitem.position}</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
              }}
            >
              {workitem.startDate.slice(0, 7)}
            </Typography>
          </TimelineContent>
        </Paper>
      </TimelineItem>
    );
  });

  return (
    <Box>
      <Grid container justifyContent="center">
        {!isMobile && (
          <Timeline position="alternate" n id="experience-web">
            {TimelineWorkItemsWeb}
          </Timeline>
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
            id="experience-mobile"
          >
            {TimelineWorkItemsMobile}
          </Timeline>
        )}
      </Grid>
    </Box>
  );
}

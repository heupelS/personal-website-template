import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Typography from "@mui/material/Typography";
import Resume from "../assets/resume.json";
import Box from "@mui/material/Box";

export default function CustomizedTimeline() {
  const TimelineWorkItems = Resume.work.map((workitem) => {
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
          <TimelineConnector />
          <TimelineDot></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", width: "10vh" }}>
          <Typography variant="h6" component="span">
            {workitem.company}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
  return (
    <Box>
      <Timeline position="alternate" id="experience">
        {TimelineWorkItems}
      </Timeline>
    </Box>
  );
}

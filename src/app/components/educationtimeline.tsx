import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography, CardActions, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function EducationTimeLine() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#f50057" }}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ maxHeight: "40%", width: "2px" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: 300,
              maxWidth: 700,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: 300,
                maxWidth: 700,
              }}
            >
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                August 2020 - May 2024
              </Typography>
              <Typography variant="h5" component="div">
                Stony Brook University
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                B.S. in Computer Science
              </Typography>
              <Box component="ul" sx={{ listStyleType: "disc", pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Developed visually appealing client management tools with
                    analytics using ReactJS and TailwindCSS. Worked with and
                    mocked up designs to meet technical, appeal, and readability
                    goals.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Optimized front/backend server calls to significantly reduce
                    server load and network traffic by 75% with Node. Committed
                    to creating clean robust and performant code in adherence
                    with RESTful practices.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Designed robust data models for postgresql and mongodb,
                    optimizing query performance and database load.
                  </Typography>
                </li>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

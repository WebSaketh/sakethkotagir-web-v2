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
import WorkIcon from "@mui/icons-material/Work";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicTimeline() {
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
          <TimelineDot sx={{ backgroundColor: "#03a9f4" }}>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
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
                June 2023 - August 2023
              </Typography>
              <Typography variant="h5" component="div">
                Hillfort Technologies
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                SWE Summer Intern- Full Stack Development
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
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#03a9f4" }}>
            <WorkIcon />
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
                June 2021 - August 2021
              </Typography>
              <Typography variant="h5" component="div">
                ProHealth Care
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Summer Intern - IT Admin and Applications
              </Typography>
              <Box component="ul" sx={{ listStyleType: "disc", pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Identified and improved bottlenecks in the existing workflow
                    procedures and sped up the process of imaging and diagnosing
                    workstations by 5x.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Demonstrated technical prowess by assembling workstations
                    and skillfully replacing components, showcasing a hands-on
                    approach to hardware management and ensuring a seamless and
                    up-to-date computing environment.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Took charge of the organization's Active Directory by
                    proficiently managing Device OUs and maintained a proactive
                    approach to maintaining a well-organized and efficient
                    directory structure.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Maintained the organization's assets and inventory,
                    contributing to the overall transparency and accountability
                    of resources. This responsibility involved meticulous
                    tracking and documentation, ensuring smooth and informed
                    decision-making processes.
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

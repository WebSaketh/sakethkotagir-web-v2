"use client";
import styles from "./page.module.css";
import ResponsiveAppBar from "@/app/components/responsiveappbar";
import BasicTimeline from "../components/basictimeline";
import { Box, Typography } from "@mui/material";
import EducationTimeLine from "../components/educationtimeline";

export default function Home() {
  return (
    <div className={styles.page}>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <Box className={styles.panels}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              EMPLOYMENT
            </Typography>
            <BasicTimeline></BasicTimeline>
          </Box>

          <Box
            sx={{
              display: "flex",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                EDUCATION
              </Typography>
              <EducationTimeLine></EducationTimeLine>
            </Box>
          </Box>
        </Box>
        <Box
          component="embed"
          src="/content/kotagiri_saketh_resume_.pdf"
          type="application/pdf"
          sx={{
            width: "100%",
            height: "900px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </main>
    </div>
  );
}

"use client";
import styles from "./page.module.css";
import ResponsiveAppBar from "@/app/components/responsiveappbar";
import { List, ListItem, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const p_style = {
  padding: "10px",
  fontWeight: "700",
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: "0rem",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <Card sx={{ maxWidth: 900 }}>
          <CardContent>
            <Box className={styles.contactcard}>
              <Box
                component="img"
                src="/content/bg-flower-modified.png"
                sx={{
                  height: {
                    xs: "300px",
                    sm: "300px",
                    md: "150px",
                  },
                  width: {
                    xs: "300px",
                    sm: "300px",
                    md: "150px",
                  },
                  padding: "20px",
                  backgroundColor: "",
                  borderRadius: "10%",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Saketh Kotagiri
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {
                    "Hi I'm Saketh, graduate and developer. Here's everything you might need to contact me. Feel free to reach out about projects, collaborations, or professional work."
                  }
                </Typography>
              </Box>
            </Box>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ paddingY: "10px" }}
            ></Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <List>
                <ListItem
                  component="a"
                  href="mailto:skotagiri99@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #EA4335 0%, #F88D8D 100%)",
                      padding: "10px",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />
                  <p className={styles.p} style={p_style}>
                    skotagiri99@gmail.com
                  </p>
                </ListItem>
                <ListItem
                  component="a"
                  href="https://linkedin.com/in/saketh-kotagiri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #0077B5 0%, #00a0dc 100%)",
                      padding: "10px",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />
                  <p className={styles.p} style={p_style}>
                    linkedin.com/in/saketh-kotagiri
                  </p>
                </ListItem>
              </List>
              <List>
                <ListItem
                  component="a"
                  href="https://github.com/websaketh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #333 0%, #6e5494 100%)",
                      padding: "10px",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />
                  <p className={styles.p} style={p_style}>
                    github.com/websaketh
                  </p>
                </ListItem>
                <ListItem
                  component="a"
                  href="https://www.instagram.com/sakethkotagiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                      padding: "10px",
                      borderRadius: "50%",
                      color: "white",
                    }}
                  />
                  <p className={styles.p} style={p_style}>
                    @sakethkotagiri
                  </p>
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "./components/responsiveappbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            gridRowStart: 2,
            justifyContent: "center",
          }}
        >
          <Box
            component="ul"
            sx={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              maxWidth: "500px",
            }}
          >
            <li>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  color: "inherit",
                  textDecoration: "none",
                  overflow: "visible",
                }}
              >
                {"hey there i'm ..."}
              </Typography>
            </li>
            <li>
              <Typography
                variant="h1"
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #38bdf8, #22c55e)",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  textDecoration: "none",
                  overflow: "visible",
                }}
              >
                SAKETH
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  color: "inherit",
                  textDecoration: "none",
                  overflow: "visible",
                }}
              >
                {
                  "I'm a computer science graduate and developer based in New York. Here you can find my various projects and social media accounts. Feel free to contact me or just explore my portfolio!"
                }
              </Typography>
            </li>
          </Box>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://linkedin.com/in/saketh-kotagiri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                sx={{ filter: "invert(1)" }}
                component="img"
                src="/content/linkedin-logo.svg"
                alt="LinkedIn Logo"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/websaketh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              <Box
                component="img"
                src="/content/github-logo.svg"
                alt="GitHub Logo"
                width={20}
                height={20}
              />
              GitHub
            </a>
          </div>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            flexDirection: "column",
            gap: "32px",
          }}
          className={styles.splashpicture}
        >
          <Image
            src="/content/bg-flower-modified.png"
            alt="background picture"
            width={500}
            height={500}
          ></Image>
        </Box>
      </main>
      <footer className={styles.footer} style={{ gap: "6px" }}>
        <p>This website was made using </p>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/content/react_logo_dark.svg"
            alt="React Logo"
            width={16}
            height={16}
          />
          ReactJS
        </a>
        <p> and </p>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/content/mui-logo.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Material UI.
        </a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/content/vercel-logo.svg"
            alt="Vercel Logo"
            width={16}
            height={16}
          />
          Hosted by Vercel.
        </a>
      </footer>
    </div>
  );
}

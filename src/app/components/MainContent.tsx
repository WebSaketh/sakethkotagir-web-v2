import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const cardData = [
  {
    img: "/content/about/gerrymandering.jpeg",
    tag: "Datascience and Analytics",
    title:
      "Visualizing Gerrymandered District Plans with GerryChain and Leaflet",
    description:
      "I developed a full-stack React application for political redistricting analysis, featuring a responsive UI with Tailwind CSS and interactive maps using Leaflet JS. The backend, built with Spring Boot, supported complex data processing and analysis. I led a student team through the project, handling front-end and back-end development, data collection, and clustering. Using Stony Brook's supercomputer along with MPI and Slurm, I generated and analyzed over 15,000 redistricting plans, applying custom distance algorithms and K-Nearest Neighbors (KNN) for enhanced accuracy.",
  },
  {
    img: "/content/about/saketh_portfolio.png",
    tag: "Web Development",
    title: "Building an online presence using ReactJs, hosted by Vercel",
    description:
      "I created a personal website to strengthen my online presence and showcase my professional skills. This portfolio site is built using ReactJS and NextJS, and is deployed on Vercel for seamless hosting and performance. Leveraging Material-UI allowed me to efficiently design and implement a clean and functional layout. The website features an organized structure with sections for an about me overview, resume, and contact information, all presented in a simple yet elegant web app. A well-crafted portfolio website like this is essential for highlighting one’s work, making a strong impression on potential clients or employers, and maintaining an accessible online presence.",
  },
  {
    img: "/content/about/top5lister.png",
    tag: "Design. Databases. Development",
    title: "Building a Full Stack Social Media App",
    description:
      "Developed a sophisticated full-stack web application using ReactJS for the frontend and Node.js with Express for the backend. This project highlights expertise in both client and server-side technologies, including secure JWT-based authentication, efficient network calls with Axios, and state management using React Context API. The integration of these technologies ensures a robust, feature-rich application with capabilities for user profiling and analytics.",
  },
  {
    img: "https://picsum.photos/800/450?random=4",
    tag: "System Design",
    title: "Dynamic Memory Allocation",
    description:
      "Revamped the memory management system in C by replacing the GNU C allocator with a custom paged and listed implementation. This project demonstrates advanced skills in C programming and algorithm development, showcasing the ability to design complex, efficient memory management solutions. ",
  },
  {
    img: "https://picsum.photos/800/450?random=6",
    tag: "Milestone",
    title: "My Longest 4-Year Project",
    description:
      "Completed a comprehensive 4-year program covering a wide range of topics, including Data Structures and Algorithms, Machine Learning, Web Development, System Design, Programming Languages, and Compilers. Proud to have accomplished this significant milestone.",
  },
  {
    img: "/content/about/networks_python.png",
    tag: "Networks",
    title: "Understanding The Internet",
    description:
      "Created a Python tool for recursively resolving DNS requests using root servers, enhancing my understanding of the DNS protocol. Additionally, developed another Python tool to analyze TCP network flows with data from Wireshark, further deepening my knowledge of networking protocols.",
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

function Author() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      ></Box>
      <Typography variant="caption">Sep 14, 2024</Typography>
    </Box>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontFamily: "'Montserrat', sans-serif", alignSelf: "center" }}
        >
          ABOUT
        </Typography>

        <Card
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
          }}
        >
          <Typography
            sx={{ padding: "20px", fontFamily: "'Montserrat', sans-serif" }}
          >
            {
              "I'm a dedicated student at Stony Brook University and have graduated in 2024 with a Bachelor's degree in Computer Science. My passion lies in the realm of full-stack application development and database programming, where I have honed my skills through hands-on experience. I am eagerly exploring opportunities for full-time positions as I have completed my degree, seeking to leverage my education, skills, and enthusiasm to contribute meaningfully to innovative projects and organizations."
            }{" "}
            <br /> <br />{" "}
            {
              "I've completed projects ranging from statistical analysis to web development to scripting. Each project incorporating different domain knowledge with different sets of expectations. Feel free to check out and read about my projects below. The source code for these projects can be found on my github at /WebSaketh."
            }
          </Typography>
          <CardMedia
            component="img"
            sx={{
              width: {
                xs: "full",
                lg: 300,
              },
            }}
            image="/content/about/profile_picture.jpeg"
            alt="Picture of Saketh"
          />
        </Card>
      </Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontFamily: "'Montserrat', sans-serif", alignSelf: "center" }}
      >
        PROJECTS
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? "Mui-focused" : ""}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[0].description}
              </StyledTypography>
            </SyledCardContent>
            <Author />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? "Mui-focused" : ""}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[1].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[1].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[1].description}
              </StyledTypography>
            </SyledCardContent>
            <Author />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(2)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 2 ? "Mui-focused" : ""}
            sx={{ height: "100%" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[2].img}
              sx={{
                height: { sm: "auto", md: "50%" },
                aspectRatio: { sm: "16 / 9", md: "" },
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[2].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[2].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[2].description}
              </StyledTypography>
            </SyledCardContent>
            <Author />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(3)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 3 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <SyledCardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography gutterBottom variant="caption" component="div">
                    {cardData[3].tag}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {cardData[3].title}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {cardData[3].description}
                  </StyledTypography>
                </div>
              </SyledCardContent>
              <Author />
            </SyledCard>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(4)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 4 ? "Mui-focused" : ""}
              sx={{ height: "100%" }}
            >
              <SyledCardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <Typography gutterBottom variant="caption" component="div">
                    {cardData[4].tag}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {cardData[4].title}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {cardData[4].description}
                  </StyledTypography>
                </div>
              </SyledCardContent>
              <Author />
            </SyledCard>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 5 ? "Mui-focused" : ""}
            sx={{ height: "100%" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[5].img}
              sx={{
                height: { sm: "auto", md: "50%" },
                aspectRatio: { sm: "16 / 9", md: "" },
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[5].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[5].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[5].description}
              </StyledTypography>
            </SyledCardContent>
            <Author />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}

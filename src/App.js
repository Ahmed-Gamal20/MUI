import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  ThemeProvider,
  Box,
} from "@mui/material";
import Sidebar from "./components/mui/sidebar/sidebar";
import RightSidebar from "./components/mui/rightSidebar/rightSidebar";
import darkTheme from "./components/mui/darkTheme/theme";
import Post from "./components/mui/mainSection/createPost";
import StoryCard from "./components/mui/mainSection/cards";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={12} md={3} display={{ xs: "none", md: "block" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container sx={{ padding: "2rem" }}>
            <Post />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <StoryCard
                avatarLetter="A"
                title="ahmed"
                subheader="September 9, 2024"
                image="https://assets.goal.com/images/v3/getty-2162279488/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DENRRHIYA====/GettyImages-2162279488.jpg?auto=webp&format=pjpg&width=1080&quality=60"
                content="soon."
                expandedContent="loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
              />

              <StoryCard
                avatarLetter="G"
                title="gamal"
                subheader="September 9, 2024"
                image="https://www.dezven.com/images/blog/what-is-meant-by-backend-developer.jpg"
                content="Back End."
                expandedContent="loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
              />
              <StoryCard
                avatarLetter="G"
                title="gaher"
                subheader="September 9, 2024"
                image="https://i1.hespress.com/wp-content/uploads/2024/06/mbappe-madrid.jpg"
                content="tik tak........"
                expandedContent="loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem ..."
              />
              <StoryCard
                avatarLetter="A"
                title="alaa"
                subheader="September 9, 2024"
                image="https://www.keycdn.com/img/support/full-stack-development-lg@2x.webp"
                content="Full Stack Tech."
                expandedContent="loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem ..."
              />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={3} display={{ xs: "none", md: "block" }}>
          <RightSidebar />
        </Grid>
        <Grid item xs={12} display={{ md: "none" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Sidebar />
            <RightSidebar />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

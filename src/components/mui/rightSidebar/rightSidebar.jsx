import React from "react";
import { Paper, Typography, TextField, styled } from "@mui/material";
import PaperItem from "./paperItem";
import MainBtn from "../../Buttons/mainBtn";
import MyListComponent from "./listComp";
import FollowList from "./avatarComp";

const RightSidebarContainer = styled(Paper)(({ theme }) => ({
  width: "100%", 
  maxWidth: "350px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    marginLeft: 0,
    marginTop: theme.spacing(2),
  },
}));


const SearchBar = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
}));

const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <SearchBar variant="outlined" placeholder="Search..." />
      <PaperItem title="What's Happening">
        <MyListComponent />
      </PaperItem>
      <PaperItem title="Who to follow">
        <FollowList />
      </PaperItem>
    </RightSidebarContainer>
  );
};

export default RightSidebar;

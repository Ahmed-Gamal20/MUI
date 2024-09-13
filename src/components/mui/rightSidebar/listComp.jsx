import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

const MyListComponent = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginTop: "11px",
      }}
    >
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Trending In Egypt
            </Typography>
          </ListItemIcon>

          <Typography variant="body2" color="text.secondary">
          #رياضة
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              100K post
            </Typography>
          </ListItemIcon>

          <Typography variant="body2" color="text.secondary">
          Real Madrid
           </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >



          
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Trending In Egypt
            </Typography>
           
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
             #برمجة
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              2000 post
            </Typography>
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
             Full Stack
          </Typography>
        </ListItemButton>        
      </ListItem>




      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              Trending In Egypt
            </Typography>
          </ListItemIcon>

          <Typography variant="body2" color="text.secondary">
          #المنتخب
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          role={undefined}
          dense
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <ListItemIcon>
            <Typography variant="body2" color="text.secondary">
              10K post
            </Typography>
          </ListItemIcon>

          <Typography variant="body2" color="text.secondary">
         العميد و حجازي
           </Typography>
        </ListItemButton>
      </ListItem>



      
    </List>
  );
};

export default MyListComponent;

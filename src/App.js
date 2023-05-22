// Import dependencies
import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Settings from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Container
        sx={{
          backgroundColor: "red",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: 320,
            maxWidth: "100%",
          }}
        >
          <MenuList>
            <MenuItem onClick={() => navigate("/game/cell phone")}>
              <ListItemIcon>
                <PlayArrow fontSize="small" />
              </ListItemIcon>
              <ListItemText>Play</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Container>
    </>
  );
}

export default App;

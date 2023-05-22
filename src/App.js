// Import dependencies
import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import "./App.css";
import { ObjectDetector } from "./components/ObjectDetector.jsx";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Cloud from "@mui/icons-material/Cloud";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Settings from "@mui/icons-material/Settings";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Paper sx={{ width: 320, maxWidth: "100%" }}>
          <MenuList>
            <MenuItem>
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
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Container>
      <ObjectDetector objectToMatch={"cell phone"} />
    </>
  );
}

export default App;

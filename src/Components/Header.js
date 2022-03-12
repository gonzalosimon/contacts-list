import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#3f50b5' }}>
        <Toolbar style={{ margin: "auto"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Contacts List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

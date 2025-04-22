import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Home from "./pages/Home";
import MiraCrownHelper from "./pages/MiraCrownHelper/MiraCrownHelper";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* Navbar with custom color */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#43347d", // pastel purple color
          color: "#fff", // white text color
          boxShadow: "none", // Optional: remove shadow for a clean look
          padding: "10 px 20px", // Optional: add some padding
          borderRadius: "10px 10px 10px 10px", // Optional: rounded corners
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </Typography>

          <Box>
            <Button color="inherit" component={Link} to="/MiraCrownHelper">
              MiraCrownHelper
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content area */}
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MiraCrownHelper" element={<MiraCrownHelper />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

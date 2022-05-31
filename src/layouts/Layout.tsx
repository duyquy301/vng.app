import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import VerticalTabs from "components/VerticalTabs";
import React, { FC, PropsWithChildren } from "react";
import ResponsiveAppBar from "components/ResponsiveAppBar";
import Typography from "@mui/material/Typography";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            position: "fixed",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            top: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Box component="img" src="/vng.png" alt="logo" p={2} />
          <Typography variant="h6" component="h6">
            Bảng điều khiển
          </Typography>
          <VerticalTabs />
        </Box>
        <Paper
          elevation={3}
          sx={{
            minHeight: "calc(100vh - 64px)",
            borderRadius: 0,
            borderTopLeftRadius: "24px",
            ml: "300px",
            width: "100%",
            padding: 2,
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default Layout;

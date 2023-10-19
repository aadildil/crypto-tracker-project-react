import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";

const style = {
  color: "var(--white)",
  width: "50vw",
  fontSize: "1.2rem",
  fontWeight: "600",
  fontFamily: "Inter",
  textTransform: "capitalize",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#006aff",
    },
  },
});

function TabsComponent({ coins }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} aria-label="" variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </div>
        <TabPanel value="Grid">{coins.map((item,index)=>(
          <p key={item.id}>
            {item.name}

          </p>
        ))}</TabPanel>
        <TabPanel value="List">Item Two</TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
export default TabsComponent;
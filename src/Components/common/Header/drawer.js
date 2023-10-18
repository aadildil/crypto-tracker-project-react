import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";

import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-container">
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="/">
            Compare
          </a>
          <a className="link" href="/">
            WatchList
          </a>
          <a className="link" href="/">
            DashBoard
          </a>
        </div>
      </Drawer>
    </div>
  );
}

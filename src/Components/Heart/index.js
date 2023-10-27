import React, { useContext, useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import watchListContext from "../../context/watchListContext";

import "./style.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Heart = ({ id }) => {
  const { globalWatchList, setGlobalWatchList } = useContext(watchListContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log(id);
    if (globalWatchList.includes(id)) {
      setLiked(true);
    }
  }, []);

  const handleLikeToggle = () => {
    if (!liked) {
      let newWatchList;
      if(globalWatchList.length==1&&globalWatchList[0]=="")
      {
        newWatchList = [id];

      }else
      {
        newWatchList = [...globalWatchList, id];
      }
       
      setGlobalWatchList(newWatchList);

      localStorage.setItem("watchList", JSON.stringify(newWatchList));
    } else {

      const newWatchList = globalWatchList.filter((item) => item !== id);
      localStorage.setItem("watchList", JSON.stringify(newWatchList));
      setGlobalWatchList(globalWatchList.filter((item) => item !== id));
      window.location.reload();
      // Update localStorage
      
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checked"
            checked={liked} // Set the checked state of the checkbox
            onChange={handleLikeToggle} // Handle the click event
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        }
      />
    </div>
  );
};
export default Heart;

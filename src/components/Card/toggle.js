import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../store/slices/watchListSlice";

function Toggle(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.WatchList.watchListItems);
  const [isInList, setIsInList] = useState(false);
  useEffect(() => {
    setIsInList(watchList.some((listItem) => listItem.id === item.id));
  }, [watchList, item]);

  const hanleclick = () => {
    dispatch(toggleWatchList(item));
  };

  // console.log(watchList)
  return (
    <>
      <>
        <span onClick={hanleclick}>
          <Stack>
            <FavoriteTwoToneIcon
              className={isInList ? "text-warning" : ""}
              style={{
                fontSize: "35px",
                cursor: "pointer",
              }}
            />
          </Stack>
        </span>
      </>
    </>
  );
}

export default Toggle;

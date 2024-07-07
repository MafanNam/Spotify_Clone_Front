"use client";

import AdditionalControllers from "./AdditionalControllers";
import MainControllers from "./MainControllers";
import PlayerTrackInfo from "./PlayerTrackInfo";
import {useAppSelector} from "@/lib/hooks";

export default function PreviewPlayer() {
  const {currentTrack} = useAppSelector(state => state.track);

  // if (!currentTrack) {
  //   return null;
  // }

  return (
    <footer
      // className="grid items-center justify-between grid-cols-12 p-3 bg-red-900"
      className={`sticky bottom-0 grid grid-cols-12 gap-12 bg-background items-center justify-between px-5 ${
        currentTrack ? "py-3" : "py-0"
      }`}
    >
      <PlayerTrackInfo currentTrack={currentTrack}/>
      <MainControllers currentTrack={currentTrack}/>
      <AdditionalControllers/>
    </footer>
  );
}
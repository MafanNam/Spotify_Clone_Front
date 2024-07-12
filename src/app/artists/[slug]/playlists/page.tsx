"use client";

import {useListPlaylistQuery} from "@/lib/features/other/publicApiSlice";
import Footer from "@/components/general/Footer";
import {useSearchParams} from "next/navigation";
import PlaylistCards from "@/components/playlists/PlaylistCards";
import TitleShowAll from "@/components/ui/title-show-all";
import MainSection from "@/components/general/main-section";


export default function Page() {
  const search = useSearchParams();
  const userId = search.get("id");
  const display_name = search.get("name");

  const {
    data: artistPlaylists,
    isLoading: isLoading,
    isFetching: isFetching,
  } = useListPlaylistQuery({userId})

  const load = isLoading || isFetching


  return (
    <MainSection>
      <div className="mx-6 my-6 space-y-6">

        {(artistPlaylists?.count || 0) > 0 && (
          <div className="mt-20">
            <TitleShowAll title={`Popular Playlists by ${display_name}`} isShowAll={false} className="text-3xl">
              <PlaylistCards playlists={artistPlaylists?.results}/>
            </TitleShowAll>
          </div>
        )}

        <Footer/>
      </div>
    </MainSection>
  );
}

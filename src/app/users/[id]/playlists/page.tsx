"use client";

import {useListPlaylistQuery} from "@/lib/features/other/publicApiSlice";
import Footer from "@/components/general/Footer";
import {usePathname} from "next/navigation";
import PlaylistCards from "@/components/playlists/PlaylistCards";
import TitleShowAll from "@/components/ui/title-show-all";
import MainSection from "@/components/general/main-section";


export default function UserPlaylistsPage() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const userId = parts[2];

  const {
    data: userPlaylists,
    isLoading: isLoading,
    isFetching: isFetching,
  } = useListPlaylistQuery({userId})

  const load = isLoading || isFetching

  return (
    <MainSection>
      <div className="mx-6 my-6 space-y-6">
        {(userPlaylists?.count || 0) > 0 && (
          <div className="mt-20">
            <TitleShowAll
              title="Public Playlists"
              isShowAll={false}
              className="text-3xl"
            >
              <PlaylistCards playlists={userPlaylists?.results}/>
            </TitleShowAll>
          </div>
        )}

        <Footer/>
      </div>
    </MainSection>
  );
}

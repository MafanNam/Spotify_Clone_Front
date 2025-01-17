"use client";

import {useListTrackQuery} from "@/lib/features/other/publicApiSlice";
import {usePathname} from "next/navigation";
import TitleShowAll from "@/components/ui/title-show-all";
import TracksTable from "@/components/tracks/TracksTable";
import MainSection from "@/components/general/main-section";
import FullScreenSpinner from "@/components/general/FullScreenSpinner";
import ContentSection from "@/components/general/content-section";


export default function Page() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const artistSlug = parts[2];

  const {
    data: artistTracks,
    isLoading: isLoading,
    isFetching: isFetching,
  } = useListTrackQuery({artistSlug}, {skip: !artistSlug})

  const load = isLoading || isFetching


  return (
    <MainSection>
      <ContentSection>

        {load ? <FullScreenSpinner/> : (
          (artistTracks?.count || 0) > 0 && (
            <div className="mt-20">
              <TitleShowAll
                title={`Popular releases by ${artistTracks?.results?.[0]?.artist?.display_name}`}
                isShowAll={false}
                className="text-3xl"
              >
                <TracksTable
                  tracks={artistTracks?.results}
                  showArtistCardHeader
                  showCover
                  showPlaysCount
                />
              </TitleShowAll>
            </div>
          )
        )}

      </ContentSection>
    </MainSection>
  );
}

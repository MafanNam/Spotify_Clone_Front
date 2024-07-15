"use client";

import {Dot, Music} from "lucide-react";
import Image from "next/image";
import {
  useListAlbumQuery, useRetrieveAlbumQuery,
} from "@/lib/features/other/publicApiSlice";
import TracksTable from "@/components/tracks/TracksTable";
import {useAppSelector} from "@/lib/hooks";
import Link from "next/link";
import {formatDuration} from "@/utils/clientUtils";
import AlbumCards from "@/components/albums/AlbumCards";
import {format} from "date-fns";
import TitleShowAll from "@/components/ui/title-show-all";
import PlayButtonAndOther from "@/components/ui/play-button-and-other";
import MainSection from "@/components/general/main-section";
import FullScreenSpinner from "@/components/general/FullScreenSpinner";
import ContentSection from "@/components/general/content-section";

interface Props {
  params: {
    slug: string;
  };
}

export default function AlbumsPage({params}: Props) {
  const {data: album, isLoading, isFetching} = useRetrieveAlbumQuery(params.slug)
  const artistSlug = album?.artist?.slug || null;
  const {
    data: artistAlbums,
    isLoading: isLoadingA,
    isFetching: isFetchingA,
  } = useListAlbumQuery({artistSlug}, {skip: !artistSlug})

  const load = isLoading || isFetching || isLoadingA || isFetchingA

  const {activeTrack, currentIndex} = useAppSelector(state => state.track)

  const AlbumBgColor = album?.color || "#202020";

  return (
    <MainSection bgColor={AlbumBgColor}>
      <div className="h-60 bg-opacity-30 bg-black">
        <div className="flex items-end gap-6 p-4 pt-10">
          {album && (
            <>
              {album.image.length > 0 ? (
                <Image
                  src={album.image}
                  alt={album.title}
                  height={170}
                  width={170}
                  className="aspect-square object-cover shadow-2xl rounded-sm h-44 w-44"
                  priority
                />
              ) : (
                <div className="">
                  <Music size={160} className=" bg-paper "/>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <h5 className="text-xs font-bold uppercase">Album</h5>
                <h2 className="text-6xl font-bold">{album.title}</h2>

                {album.description && (
                  <p className="font-medium text-sm mt-3 whitespace-pre-line text-white/50">
                    {album.description}
                  </p>
                )}

                <div className="flex items-center text-sm font-medium">
                  <Image
                    src={album.artist.image}
                    alt={album.artist.display_name}
                    height={24}
                    width={24}
                    className="aspect-square object-cover rounded-full mr-1 w-6 h-6"
                    priority
                  />
                  <Link href={`/artists/${album.artist.slug}`}
                        className="font-semibold hover:underline">{album.artist.display_name}</Link>
                  {album.release_date && (
                    <>
                      <Dot/>
                      <span>{format(new Date(album.release_date), 'yyyy')}</span>
                    </>
                  )}
                  {album.tracks.length > 0 && (
                    <>
                      <Dot/>
                      <span>{album.tracks.length.toLocaleString()} {album.tracks.length === 1 ? "song" : "songs"}</span>
                    </>
                  )}
                  {album?.duration && (
                    <>
                      <Dot/>
                      <span className="text-white/50">{formatDuration(album.duration)}</span>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <ContentSection>
        {load ? <FullScreenSpinner/> : (
          <>
            <PlayButtonAndOther
              track={album?.tracks?.[currentIndex] || (activeTrack || undefined)}
              tracks={album?.tracks}
              index={currentIndex}
              isFavorite
            />

            <div>
              <TracksTable
                tracks={album?.tracks}
                showHeader
                showSubtitle
              />
            </div>

            {album?.release_date && (
              <div>
                <p className="font-normal text-sm mt-10 text-white/60">
                  {format(new Date(album.release_date), 'MMMM dd, yyyy')}
                </p>
                <div className="font-normal text-xs text-white/50">
                  <p>© {format(new Date(album.release_date), 'yyyy')} {album?.artist?.display_name}</p>
                  <p>℗ {format(new Date(album.release_date), 'yyyy')} {album?.artist?.display_name}</p>
                </div>
              </div>
            )}

            {(artistAlbums?.count || 0) > 0 &&
              <div className="my-8 mt-16">
                <TitleShowAll
                  title={`More by ${album?.artist.display_name}`}
                  showAll="See discography"
                  href={`/artists/${album?.artist?.slug}/discography/album`}
                >
                  <AlbumCards albums={artistAlbums?.results.slice(0, 5)}/>
                </TitleShowAll>
              </div>
            }
          </>
        )}

      </ContentSection>
    </MainSection>
  );
}

"use client";

import {CirclePlus, Dot, Music} from "lucide-react";
import Image from "next/image";
import {
  useListTrackQuery,
  useRetrievePlaylistQuery
} from "@/lib/features/other/publicApiSlice";
import TracksTable from "@/components/tracks/TracksTable";
import PlayTrackButton from "@/components/tracks/PlayTrackButton";
import {useAppSelector} from "@/lib/hooks";
import Header from "@/components/general/Header";
import PreviewPlayer from "@/components/tracks/PreviewPlayer";
import FooterLogin from "@/components/general/FooterLogin";
import Footer from "@/components/general/Footer";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {formatDuration} from "@/utils/clientUtils";

interface Props {
  params: {
    slug: string;
  };
}

export default function PlaylistPage({params}: Props) {
  const {data: playlist, isLoading, isFetching} = useRetrievePlaylistQuery(params.slug)
  const {
    data: recommendations,
    isLoading: isLoadingRec,
    isFetching: isFetchingRec,
  } = useListTrackQuery({genreSlug: playlist?.genre?.slug || ''})

  const load = isLoading || isFetching || isLoadingRec || isFetchingRec

  const {activeTrack, currentIndex} = useAppSelector(state => state.track)

  const darkenBgColor = playlist?.color || "#202020";

  return (
    <>
      <div
        className="h-full rounded-lg"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${darkenBgColor}, #131313, #131313)`,
        }}
      >
        <Header/>
        <div className="h-60 bg-opacity-30 bg-black">
          <div className="flex items-end gap-6 p-4 pt-10">
            {playlist && (
              <>
                {playlist.image.length > 0 ? (
                  <Image
                    src={playlist.image}
                    alt={playlist.title}
                    height={170}
                    width={170}
                    className="aspect-square object-cover shadow-2xl rounded-sm"
                    priority
                  />
                ) : (
                  <div className="">
                    <Music size={160} className=" bg-paper "/>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <h5 className="text-xs font-bold uppercase">{playlist.genre.name}</h5>
                  <h2 className="text-6xl font-bold">{playlist.title}</h2>

                  {playlist.description && (
                    <p className="font-medium text-sm mt-3 whitespace-pre-line text-white/50">
                      {playlist.description}
                    </p>
                  )}

                  <div className="flex items-center text-sm font-medium">
                    <Image
                      src={playlist.user.image}
                      alt={playlist.user.display_name}
                      height={24}
                      width={24}
                      className="aspect-square object-cover rounded-full mr-1"
                      priority
                    />
                    <Link href={`/user/${playlist.user.id}`}
                          className="font-semibold hover:underline">{playlist.user.display_name}</Link>
                    {playlist.favorite_count > 0 && (
                      <>
                        <Dot/>
                        <span>
                      {playlist.favorite_count.toLocaleString()}{" "}
                          {playlist.favorite_count > 1 ? "saves" : "save"}
                    </span>
                      </>
                    )}
                    {playlist.tracks.length > 0 && (
                      <>
                        <Dot/>
                        <span>{playlist.tracks.length.toLocaleString()} songs</span>
                      </>
                    )}
                    {playlist?.duration && (
                      <>
                        <Dot/>
                        <span className="text-white/50">about {formatDuration(playlist.duration)}</span>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mx-6 my-6">
          <div className="flex items-center space-x-6">
            <PlayTrackButton
              track={playlist?.tracks?.[currentIndex] || (activeTrack || undefined)}
              tracks={playlist?.tracks}
              index={currentIndex}
              variant="filled"
              className="w-14 h-14 text-4xl"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CirclePlus size={33} className="text-[#808080] hover:scale-105 duration-150 hover:text-gray-100"/>
                </TooltipTrigger>
                <TooltipContent className="text-white bg-[#202020]">
                  <p>Save to Your library</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </div>

          <div>
            <TracksTable
              tracks={playlist?.tracks}
              showAlbum
              showCover
              showHeader
              showSubtitle
            />
          </div>

          {(recommendations?.count || 0) > 0 &&
            <div className="my-8">
              <h1 className="font-bold text-2xl pb-1">Recommended</h1>
              <p className="text-sm text-white/60">Based on what`s in this playlist</p>
              <TracksTable
                tracks={recommendations?.results.slice(0, 10)}
                showAlbum
                showCover
                showSubtitle
              />
            </div>
          }

          <Footer/>
        </div>
      </div>
      {activeTrack ? <PreviewPlayer/> : <FooterLogin/>}
    </>
  );
}

"use client";

import {CircleX, Globe, Layers, Plus} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LibraryItemCard from "./LibraryItemCard";
import LibraryTypeTag from "./LibraryTypeTag";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {collectionTracks, loginUrl} from "@/utils/consts";
import {useAppSelector} from "@/lib/hooks";
import {useState} from "react";
import {usePathname} from "next/navigation";
import {useListUserPlaylistLikedQuery} from "@/lib/features/playlists/playlistApiSlice";
import {useListUserTracksLikedQuery} from "@/lib/features/tracks/trackApiSlice";
import {useListUserAlbumLikedQuery} from "@/lib/features/albums/albumApiSlice";
import {useListUserArtistLikedQuery} from "@/lib/features/artists/artistApiSlice";
import {useRetrieveUserMeQuery} from "@/lib/features/auth/authApiSlice";
import {Skeleton} from "@/components/ui/skeleton";
import usePlaylistCreateForm from "@/hooks/usePlaylistCreateForm";
import Loader from "@/components/general/Loader";


export default function UserLibrary() {
  const {onSubmit, isLoading: isLoadingCreate} = usePlaylistCreateForm()

  const {isAuthenticated} = useAppSelector(state => state.auth)

  const {isLoading, isFetching} = useRetrieveUserMeQuery({}, {skip: !isAuthenticated})
  const {
    data: playlists,
    isLoading: isLoadingP,
    isFetching: isFetchingP,
  } = useListUserPlaylistLikedQuery({}, {skip: !isAuthenticated});
  const {
    data: tracks,
    isLoading: isLoadingT,
    isFetching: isFetchingT,
  } = useListUserTracksLikedQuery({}, {skip: !isAuthenticated});
  const {
    data: albums,
    isLoading: isLoadingA,
    isFetching: isFetchingA,
  } = useListUserAlbumLikedQuery({}, {skip: !isAuthenticated});
  const {
    data: artists,
    isLoading: isLoadingAr,
    isFetching: isFetchingAr,
  } = useListUserArtistLikedQuery({}, {skip: !isAuthenticated});

  const pathname = usePathname();

  let value = "playlists"
  if (typeof window !== "undefined") {
    value = localStorage.getItem("libraryType") || "playlists"
  }

  const [libraryType, setLibraryType] = useState(value);

  function handleLibraryType(newType: string) {
    setLibraryType(newType);
    if (typeof window !== "undefined") {
      localStorage.setItem("libraryType", newType);
    }
  }

  function handleResetType() {
    setLibraryType("all");
    if (typeof window !== "undefined") {
      localStorage.setItem("libraryType", "all");
    }
  }

  const load = (
    isLoadingP || isFetchingP || isLoadingT || isFetchingT ||
    isLoadingA || isFetchingA || isLoadingAr || isFetchingAr ||
    isLoading || isFetching
  )

  let loader;
  if (load) {
    loader = (
      <div className='flex flex-col items-stretch flex-1 max-h-full space-y-4 p-4 px-2 mt-0'>
        <div className='flex justify-between items-center w-full'>
          <Skeleton className="h-7 w-28 rounded-full"/>
          <Skeleton className="h-8 w-8 rounded-full"/>
        </div>
        <div className='flex space-x-2'>
          <Skeleton className="h-7 w-7 rounded-full"/>
          <Skeleton className="h-7 w-16 rounded-full"/>
          <Skeleton className="h-7 w-16 rounded-full"/>
          <Skeleton className="h-7 w-16 rounded-full"/>
        </div>

        <div className='space-y-3 pt-4'>
          {Array.from("1234").map((_, i) => (
            <div key={i} className='flex bg-[#181818] h-16 rounded-md space-x-2 p-2'>
              <Skeleton className="h-12 w-12 my-auto rounded-md"/>
              <div className="my-auto space-y-2">
                <Skeleton className="h-5 w-24 rounded-md"/>
                <Skeleton className="h-3 w-16 rounded-md"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }


  if (loader) return loader;


  return (
    <div className="flex flex-col items-stretch flex-1 max-h-full px-2 mt-0 rounded-lg">
      <div className="flex items-center justify-between">

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/"}
                className="flex gap-3 px-2 text-gray-300 hover:text-white">
                <Layers size={25}/>
                <span className="font-semibold text-s">Your Library</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-[#161616]">
              <p>Collapse Your Library</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="py-3">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="h-8 w-8 px-1 text-gray-300 hover:text-white"
                onClick={() => onSubmit({title: '', description: '', is_private: false})}
                disabled={isLoadingCreate}
              >
                {isLoadingCreate ? <Loader className="w-[18px] h-[18px] m-1"/> : <Plus size={22}/>}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-[#161616]">
              <p>Create playlist</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {!isAuthenticated && (
        <div className="items-center bg-[#282828] rounded-lg p-4 space-y-2">
          <p className="text-m font-semibold">Create your first playlist</p>
          <p className="text-sm">It`s easy, we`ll help you</p>
          <Link
            href={loginUrl}
          >
            <Button
              className="mt-4 bg-white hover:bg-gray-300 text-black rounded-3xl"
            >
              Create playlist
            </Button>
          </Link>
        </div>
      )}


      {isAuthenticated && (
        <>
          <div className="flex flex-wrap items-center gap-2 pb-4 text-xs font-semibold">
            {libraryType !== "all" ? (
              <Button onClick={handleResetType} size="icon" variant="ghost" className="h-6 w-6">
                <CircleX className="text-[#606060]"/>
              </Button>
            ) : ""}

            <LibraryTypeTag
              active={libraryType === "playlists"}
              onClick={() => handleLibraryType("playlists")}
            >
              Playlists
            </LibraryTypeTag>
            <LibraryTypeTag
              active={libraryType === "artists"}
              onClick={() => handleLibraryType("artists")}
            >
              Artists
            </LibraryTypeTag>
            <LibraryTypeTag
              active={libraryType === "albums"}
              onClick={() => handleLibraryType("albums")}
            >
              Albums
            </LibraryTypeTag>
          </div>

          <ul className="flex flex-col py-1 w-full overflow-y-auto text-sm">

            {(libraryType === "playlists" || libraryType === "all") && (
              <>
                <Link
                  href={collectionTracks}
                  className={`${
                    pathname.includes(collectionTracks) ? "bg-[#303030]/50" : ""
                  } flex items-center p-2 gap-3 rounded-sm text-white cursor-pointer hover:bg-[#404040]/20`}
                >
                  <Image
                    src="/images/spotify_like.png"
                    height={50}
                    width={50}
                    className="rounded-md"
                    alt="Liked playlist cover"
                  />

                  <div className="truncate">
                    <h6 className="w-full text-sm font-semibold truncate">
                      Liked Songs
                    </h6>
                    <span className="mt-1 text-xs font-semibold text-white/60">
                      {tracks?.count || 0} songs
                    </span>
                  </div>
                </Link>
                {(playlists?.count || 0) > 0 && (
                  (playlists?.results?.map((item) => (
                    <LibraryItemCard
                      key={item?.playlist?.id}
                      type="playlists"
                      heading={item?.playlist?.title}
                      image={item?.playlist?.image}
                      altTitle={item?.playlist?.title}
                      slug={item?.playlist?.slug}
                      subtitle={item?.playlist?.user?.display_name}
                    />
                  )))
                )}
              </>
            )}

            {(libraryType === "albums" || libraryType === "all") && (
              (albums?.count || 0) > 0 && (
                albums?.results?.map((item) => (
                  <LibraryItemCard
                    key={item?.album?.id}
                    type="albums"
                    heading={item?.album?.title}
                    image={item?.album?.image}
                    altTitle={item?.album?.title}
                    slug={item?.album?.slug}
                    subtitle={item?.album?.artist?.display_name}
                  />
                ))
              ))
            }

            {(libraryType === "artists" || libraryType === "all") && (
              (artists?.count || 0) > 0 && (
                artists?.results?.map((item) => (
                  <LibraryItemCard
                    key={item?.artist?.id}
                    type="artists"
                    heading={item?.artist?.display_name}
                    image={item?.artist?.image}
                    altTitle={item?.artist?.display_name}
                    slug={item?.artist?.slug}
                    subtitle={item?.artist?.display_name}
                  />
                ))
              ))
            }
          </ul>
        </>
      )}

      {!isAuthenticated && (
        <footer>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 p-4 pt-10 text-xs text-muted-foreground">
            <a href="#" className="block">
              Legal
            </a>
            <a href="#" className="block">
              Safety & Privacy Center
            </a>
            <a href="#" className="block">
              Privacy Policy
            </a>
            <a href="#" className="block">
              Cookies
            </a>
            <a href="#" className="block">
              About Ads
            </a>
            <a href="#" className="block">
              Accessibility
            </a>
          </div>

          <div className="p-4 pb-0">
            <Button
              variant="outline"
              className="rounded-3xl"
            >
              <Globe size={20}/>
              <span className="pl-2">English</span>
            </Button>
          </div>
        </footer>
      )}

    </div>
  );
}

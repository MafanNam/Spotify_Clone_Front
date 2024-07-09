import {Music} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PlayTrackButton from "@/components/tracks/PlayTrackButton";
import {useRetrieveTrackQuery} from "@/lib/features/other/publicApiSlice";
import {Track} from "@/types/types";
import {useAppSelector} from "@/lib/hooks";

interface Props {
  image: any;
  id: number;
  slug: string;
  altTitle: string;
  heading: string;
  subheading?: string;
  imageRounded?: boolean;
  track_slug: string;
  tracks?: Track[] | undefined;
  index?: number;
  type: string;
}

export default function CardItem({
                                   image,
                                   id,
                                   slug,
                                   altTitle,
                                   heading,
                                   subheading,
                                   imageRounded = false,
                                   track_slug,
                                   tracks,
                                   index,
                                   type,
                                 }: Props) {
  const {data: track} = useRetrieveTrackQuery(track_slug);
  const {activeTrack} = useAppSelector((state) => state.track);

  return (
    <Link href={`/${type}/${slug}`}>
      <div
        className={`h-full p-4 transition duration-300 rounded-md cursor-pointer group/item
        ${type === "artists" ? "hover:bg-gradient-to-t hover:from-[#303030]/50" : "hover:bg-[#353535]/50"}`}>
        <div className="relative">
          {image.length > 0 ? (
            <Image
              src={image}
              alt={altTitle}
              height={160}
              width={160}
              className={`aspect-square object-cover w-full ${
                imageRounded ? "rounded-full" : "rounded-md"
              }`}
            />
          ) : (
            <div className="w-full h-40">
              <Music className="w-full h-full bg-paper "/>
            </div>
          )}
          {track &&
            <PlayTrackButton
              track={track}
              tracks={tracks}
              index={index}
              variant="filled"
              className={`absolute w-12 h-12 text-3xl shadow-lg bottom-2 right-2 
            ${activeTrack?.slug === track?.slug ? "slide-down" : "slide-up"} group-hover/item:slide-down`}
            />
          }
        </div>

        <h3 className="mt-2 font-bold text-base truncate">{heading}</h3>
        {subheading && (
          <h6 className="mt-1 text-xs font-semibold truncate text-white/70">
            {subheading}
          </h6>
        )}
      </div>
    </Link>
  );
}

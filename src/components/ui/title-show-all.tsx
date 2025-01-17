import Link from "next/link";
import {Skeleton} from "@/components/ui/skeleton";

interface Props {
  children: React.ReactNode;
  title: string;
  titlePB?: string;
  titlePT?: string;
  showAll?: string;
  isShowAll?: boolean;
  href?: string;
  className?: string;
  isLoading?: boolean;
}

export default function TitleShowAll({
                                       children,
                                       titlePT,
                                       title,
                                       titlePB,
                                       showAll = "Show all",
                                       isShowAll = true,
                                       href,
                                       className = "",
                                       isLoading,
                                     }: Props) {
  return (
    <div className="w-full">
      <div className={"flex items-center justify-between font-bold text-2xl w-full mb-2 pl-4 pr-5 " + className}>
        {isLoading ? (
          <>
            <Skeleton className="h-7 w-32 sm:w-48"/>
            <Skeleton className="h-6 w-16 sm:w-24"/>
          </>
        ) : (
          href ? (
            <div className="w-full">
              {titlePT && (
                <p className="text-sm text-white/60 font-normal">{titlePT}</p>
              )}
              <div className="flex items-center justify-between w-full">
                <Link href={href} className="mt-3 hover:underline">{title}</Link>
                {isShowAll && (
                  <Link href={href}
                        className="text-sm mt-4 text-white/50 font-semibold hover:underline">{showAll}</Link>
                )}
              </div>
              {titlePB && (
                <p className="text-sm text-white/60 font-semibold">{titlePB}</p>
              )}
            </div>
          ) : (
            <div>
              {titlePT && (
                <p className="text-sm text-white/60 font-normal">{titlePT}</p>
              )}
              <h2 className={`${titlePT ? "" : "mt-3"}`}>{title}</h2>
              {titlePB && (
                <p className="text-sm text-white/60 font-normal">{titlePB}</p>
              )}
            </div>
          )
        )}
      </div>
      {children}
    </div>
  )
}
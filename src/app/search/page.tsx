"use client";

import {useListGenresQuery} from "@/lib/features/other/publicApiSlice";
import GenreCards from "@/components/others/GenreCards";
import TitleShowAll from "@/components/ui/title-show-all";
import MainSection from "@/components/general/main-section";
import FullScreenSpinner from "@/components/general/FullScreenSpinner";
import ContentSection from "@/components/general/content-section";


export default function Page() {
  const {data: genres, isLoading, isFetching} = useListGenresQuery({})

  const load = isLoading || isFetching;

  return (
    <MainSection bgColor="#181818">
      <ContentSection>
        {load ? <FullScreenSpinner/> : (
          <TitleShowAll
            title="Browse all"
            isShowAll={false}
          >
            {(genres?.count || 0) > 0 && (
              <div className="grid items-stretch grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {genres?.results.map((genre) => (
                  <GenreCards
                    key={genre.id}
                    id={genre.id}
                    slug={genre.slug}
                    altTitle={genre.name}
                    color={genre.color}
                    heading={genre.name}
                    image={genre.image}
                    type="genre"
                  />
                ))}
              </div>
            )}
          </TitleShowAll>
        )}
      </ContentSection>
    </MainSection>
  );
}

"use client";

import {useListUserFollowersQuery} from "@/lib/features/other/publicApiSlice";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import UserCards from "@/components/users/UserCards";
import {usePathname} from "next/navigation";
import TitleShowAll from "@/components/ui/title-show-all";


export default function UserFollowersPage() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const userId = parts[2];

  const {
    data: userFollowers,
    isLoading: isLoading,
    isFetching: isFetching,
  } = useListUserFollowersQuery({userId})

  const load = isLoading || isFetching


  return (
    <div
      className="h-full rounded-lg"
      style={{
        backgroundImage: `linear-gradient(to bottom, #202020, #131313, #131313)`,
      }}
    >
      <Header/>
      <div className="mx-6 my-6 space-y-6">
        {(userFollowers?.length || 0) > 0 && (
          <div className="mt-20">
            <TitleShowAll
              title="Followers"
              isShowAll={false}
              className="text-4xl"
            >
              <UserCards users={userFollowers}/>
            </TitleShowAll>
          </div>
        )}

        <Footer/>
      </div>
    </div>
  );
}
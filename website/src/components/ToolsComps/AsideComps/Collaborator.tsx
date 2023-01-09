import React from "react";
import Box from "../../Box";
import Link from "next/link";
import Btn from "../../Button/Btn";
import { FaGithub } from "react-icons/fa";
import ProfileImg from "../../ProfileImg/ProfileImg";

interface CollaboratorType {
  apiStatus: boolean;
  apiData: string[];
  more?: boolean;
}
[];
function Collaborator({ apiData, apiStatus, more = true }: CollaboratorType) {
  return (
    <Box>
      <h2 className="text-xl font-medium py-3">Collaborator</h2>
      <hr />
      <div className="flex flex-wrap gap-2 mt-5">
        {apiStatus &&
          apiData
            .slice(0, 10)
            .map((item: any) => (
              <ProfileImg
                key={Math.random() * 50 + "devs"}
                profileUrl={`https://github.com/${item.username}`}
                name={item.username}
                imgUrl={"https://picsum.photos/200"}
              />
            ))}
        {more && apiData.length > 10 && (
          <Link
            href="https://github.com/orgs/codinasion/teams/members/members"
            target={"_blank"}
            className="text-3xl animate-pulse flex items-end justify-center aspect-square rounded-full p-2 w-16 sm:w-20"
          >
            .....
          </Link>
        )}
      </div>
      <Btn
        ariaLabel="Collaborate to codinasion-tools with us on Github"
        href={"https://github.com/codinasion/codinasion-tools"}
        target="_blank"
        text={"Collaborate"}
        cssStyle={`w-full rounded-2xl mt-5`}
        icon={<FaGithub />}
      />
    </Box>
  );
}

export default Collaborator;

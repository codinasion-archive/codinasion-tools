import React from "react";
import Box from "../../Box";
import Btn from "../../Button/Btn";
import { FaGithub } from "react-icons/fa";

function JoinCodinasion() {
  return (
    <Box>
      <h2 className="text-xl font-medium py-3">Codinasion</h2>
      <hr />
      <p className="tracking-wider mt-5">
        Codinasion is open-source organization. We provide solution related to
        programing/coding and tools which is very useful in real life coding.
        codinasion provide{" "}
        <span className="px-2 rounded-full bg-[gold] border">
          Good first issue
        </span>{" "}
        for new developers.
      </p>
      <Btn
        ariaLabel="Join Codinasion open source project"
        href={"https://github.com/codinasion/open-tools"}
        target="_blank"
        text={"Join Codinasion"}
        cssStyle={`w-full rounded-2xl mt-5`}
        icon={<FaGithub />}
      />
    </Box>
  );
}

export default JoinCodinasion;

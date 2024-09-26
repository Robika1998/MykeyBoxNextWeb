import React from "react";
import TeamData from "@/assets/jsonData/team/TeamData.json";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import Purchase from "@/components/team/Purchase";

export const metadata = {
  title: "Purchase",
};

const TeamDetails = ({ params }) => {
  const { id } = params;
  const data = TeamData.find((team) => team.id === parseInt(id));

  return (
    <>
      <LayoutStyle7 breadCrumb="Purchase" title="Purchase">
        <Purchase teamInfo={data} />
      </LayoutStyle7>
    </>
  );
};

export default TeamDetails;

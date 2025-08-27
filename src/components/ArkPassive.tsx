import { useParams } from "react-router-dom";
import { fetchArkpassive } from "../api/api";
import { useQuery } from "react-query";
import type { IArkPassive } from "../interface/armories";
import React from "react";

const ArkPassive = () => {
  const { chracname } = useParams() as { chracname: string };

  const { isLoading: arkPaLoading, data: arkpassiveData } =
    useQuery<IArkPassive>("arkpa", () => fetchArkpassive(chracname));

  console.log(arkpassiveData);

  return (
    <>
      {arkPaLoading && "로딩중"}
      {arkpassiveData && (
        <React.Fragment>
          {arkpassiveData.Points.map((point, index) => (
            <div key={index}>
              <div>{point.Name}</div>
              <div>{point.value}</div>
              <div>{point.Description}</div>
            </div>
          ))}
        </React.Fragment>
      )}
    </>
  );
};

export default ArkPassive;

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import type { IProfile } from "../interface/armories";
import { fetchProfile } from "../api/api";
import React from "react";

const Profile = () => {
  const { chracname } = useParams() as { chracname: string };

  const { isLoading: profileLoading, data: profileData } = useQuery<IProfile>(
    "chprofile",
    () => fetchProfile(chracname)
  );

  console.log(profileData);

  return (
    <>
      {profileLoading && <>로딩 중</>}
      {profileData && (
        <React.Fragment>
          <img src={profileData.CharacterImage} alt="캐릭터" />
          <div>{profileData.ServerName}</div>
          <div>{profileData.Title}</div>

          <div>{profileData.CharacterName}</div>
          <div>{profileData.CharacterLevel}</div>
          <div>{profileData.ItemAvgLevel}</div>
          <div>{profileData.CombatPower}</div>
          <div>{profileData.CharacterClassName}</div>
          <div>원정대 레벨 : {profileData.ExpeditionLevel}</div>
          <div>PVP {profileData.PvpGradeName}</div>
          <div>
            {profileData.GuildName} / {profileData.GuildMemberGrade}
          </div>
          <div>명예 : {profileData.HonorPoint}</div>

          <div>영지 레벨 : {profileData.TownLevel}</div>
          <div>영지 : {profileData.TownName}</div>

          {[0, 1, 3].map((targetIndex) => {
            const stat = profileData.Stats[targetIndex];
            return (
              <div key={targetIndex}>
                <div>{stat.Type}</div>
                <div>{stat.Value}</div>
              </div>
            );
          })}

          <div>스킬 포인트</div>
          <div>
            {profileData.UsingSkillPoint}/{profileData.TotalSkillPoint}
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default Profile;

export interface IProfile {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;

  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string;
  Title: string;
  GuildMemberGrade: string;
  GuildName: string;
  UsingSkillPoint: number;
  TotalSkillPoint: number;

  CombatPower: number;
  HonorPoint: number;

  Stats: [
    {
      Type: string;
      Value: string;
      Tooltip: [string];
    }
  ];
  Tendencies: [
    {
      Type: string;
      Point: number;
      MaxPoint: number;
    }
  ];
}

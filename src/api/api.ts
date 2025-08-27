import instance from "./axios_interceptor";

// 공지사항
export const fetchNotices = async () => {
  const response = await instance.get(`/news/notices`);

  return response.data;
};
// 이벤트
export const fetchEvents = async () => {
  const response = await instance.get(`/news/events`);

  return response.data;
};

// 캐릭터 프로필
export const fetchProfile = async (chName: string) => {
  const response = await instance.get(
    `/armories/characters/${chName}/profiles`
  );

  return response.data;
};

// 아크패시브
export const fetchArkpassive = async (chName: string) => {
  const response = await instance.get(
    `/armories/characters/${chName}/arkpassive`
  );

  return response.data;
};

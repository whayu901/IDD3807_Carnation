import { axios, baseUrl } from "../../utils";



export const achievementByQuest = async (pid: string, qidx: string) => {
  return new Promise((resolve) => {
    const url = `${baseUrl?.API_URL}api/achievement/${pid}/${qidx}`;
    const response = axios.Get({
      url,
    });

    resolve(response);
  });
};

export const totalAchievement = async (pid: string) => {
  return new Promise((resolve) => {

    const url = `${baseUrl?.API_URL}api/achievement/${pid}`;
    const response = axios.Get({
      url,
    });
    resolve(response);
  })
};

export const achievementByTopbreak = async (
  pid: string,
  code1: any,
  code2: any,
  code3: any
) => {
  return new Promise((resolve) => {
    console.log(code1);
    const url = `${baseUrl?.API_URL}api/achievement/topbreak/${pid}/?break1=S0&break2=PR7a&break3=S7&code1=${code1}&code2=${code2}&code3=${code3}`;
    const response = axios.Get({
      url,
    });
    resolve(response);
  });
};

export const achievementToCharts = (data: any) => {
  var result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].y > 0) {
      result.push({
        name: data[i].label,
        data: [data[i].y],
      });
    }
  }
  return result;
};

export const achievementToChartsPercentage = (data: any) => {
  var result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].y > 0) {
      result.push({
        name: data[i].label,
        data: [data[i].y],
        target: data[i].target,
        count: data[i].count
      });
    }
  }
  return result;
};

export const achievementToPieCharts = (data: any) => {
  var result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].y > 0) {
      result.push([data[i].label, data[i].y]);
    }
  }
  return result;
};

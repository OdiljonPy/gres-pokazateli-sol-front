export interface ISolarInfo {
  "A+": number;
  "A-": number;
  "R+": number;
  "R-": number;
  P_total: number;
}

export interface ISolarInfoRes {
  data: {
    solar_1: ISolarInfo;
    solar_2: ISolarInfo;
    solar_3: ISolarInfo;
    solar_4: ISolarInfo;
  };
  total_P_month: number;
  total_P_year: number;
  total_P_yesterday: number;
  total_P_today: number;
}

export interface ISolarInfoCommon {
  response: ISolarInfoRes;
  ok: boolean;
}

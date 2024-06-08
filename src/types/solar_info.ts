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
  };
  total_P_month: number;
  total_P_year: number;
}

export interface ISolarInfoCommon {
  response: ISolarInfoRes;
  ok: boolean;
}

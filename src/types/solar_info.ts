export interface ISolarInfo {
  P_total: number;
  P_1: number;
  P_2: number;
  P_3: number;
  U_1: number;
  U_2: number;
  U_3: number;
  I_1: number;
  I_2: number;
  I_3: number;
  count: number;
  f: number;
}

export interface ISolarMax {
  id: number;
  number_solar: number;
  P_total: number;
  created_at: string;
}

export interface ISolarInfoRes {
  data: {
    solar_1: ISolarInfo;
    solar_2: ISolarInfo;
    solar_3: ISolarInfo;
    solar_4: ISolarInfo;
  };
  max: {
    solar_1: ISolarMax;
    solar_2: ISolarMax;
    solar_3: ISolarMax;
    solar_4: ISolarMax;
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

export interface IChartSolar {
  P_total: number;
  crated_at: string;
  id: number;
  number_solar: number;
}

export interface IChartSolarRes {
  solar_1: IChartSolar[];
  solar_2: IChartSolar[];
  solar_3: IChartSolar[];
  solar_4: IChartSolar[];
}

export interface IChartSolarCommon {
  response: IChartSolarRes;
  ok: boolean;
}

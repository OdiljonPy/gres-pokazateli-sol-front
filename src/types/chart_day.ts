export interface IChart {
  value: number;
  created_at: string;
}

export interface IChartDay {
  solar_1: IChart[];
  solar_2: IChart[];
  solar_3: IChart[];
  solar_4: IChart[];
}

export interface IChartDayRes {
  result: IChartDay;
  ok: boolean;
}

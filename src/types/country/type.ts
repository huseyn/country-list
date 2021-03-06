export interface ICountry {
  name: string;
  region: string;
  area: number;
  independent: boolean;
}

export interface ISmallerCountry {
  area: number;
  isSmaller: boolean;
}

export interface IPagination {
  page: number;
  count: number;
}

export interface CountriesResponse{
  countries: Country[];
  states: State[];
  cities: City[];
  responseStatus: boolean;
}

export interface City {
  cityId: number;
  cityName: string;
  cityCode: string;
}

export interface State {
  stateId: number;
  stateName: string;
  stateCode: string;
  cities: City[];
}

export interface Country {
  countryId: number;
  countryName: string;
  countryCode: string;
  states: State[];
};

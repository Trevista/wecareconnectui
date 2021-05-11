export interface SpecialitiesResponse{
  specialities: Speciality[];
  responseStatus: boolean;
  responseMessage: string;
}

export interface Speciality{
  id: number;
  name: string;
  description: string;
  image: string;
  checked: boolean | null;
}

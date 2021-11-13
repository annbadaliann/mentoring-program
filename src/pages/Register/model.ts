export enum ESteps {
  FirstStep,
  SecondStep,
  ThirdStep,
}

export interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
}

export interface ILocation {
  state: {
    page: number;
  };
}

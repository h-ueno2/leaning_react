export type FeeClassification = {
  name: string;
  description: string;
  unitPrice: number;
  numOfPeople: number;
  totalPrice: number;
};

export type DetailProps = {
  classfication: FeeClassification;
  onNumOfPeopleChange: (num: number) => void;
};

export type SummaryProps = {
  numOfPeople: number;
  totalAmount: number;
};

export type AdmissionFeeCalculatorState = {
  feeClassifications: FeeClassification[];
};

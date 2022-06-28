export interface IData {
  address_1: string;
  address_2: string;
  center_classification_date: string;
  city: string;
  classification: string;
  code_info: string;
  country: string;
  distribution_pattern: string;
  event_id: string;
  initial_firm_notification: string;
  openfda: any;
  postal_code: string;
  product_description: string;
  product_quantity: string;
  product_type: string;
  reason_for_recall: string;
  recall_initiation_date: string;
  recall_number: string;
  recalling_firm: string;
  report_date: string;
  state: string;
  status: string;
  termination_date: string;
  voluntary_mandated: string;
}

export type TMainSlice = {
  loading: boolean;
  currentMode: string;
  data: IData[] | [];
};
export type TState = {
  main: TMainSlice;
};

export interface TodoResponseType {
  id: number;
  title: string;
}

export type TodosResponseType = TodoResponseType[];

export interface TodoRequestType {
  title: string;
}

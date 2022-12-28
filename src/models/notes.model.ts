export interface Note {
  id: number;
  title: string;
  body: string;
  updated: Date;
  created: Date;
  completed: boolean;
  my_day: boolean;
  important: boolean;
  planned: boolean;
}

export type Notes = Pick<
  Note,
  | "id"
  | "title"
  | "body"
  | "updated"
  | "created"
  | "completed"
  | "my_day"
  | "important"
  | "planned"
>[];

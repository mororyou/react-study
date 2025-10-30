export type Task = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

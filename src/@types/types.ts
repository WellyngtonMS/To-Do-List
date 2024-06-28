export type InputCreate = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
};

export type TodoType = {
  id: string;
  text: string;
  status: boolean;
};

export type TodoListType = {
  toDos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export type ItemType = {
  todo: TodoType;
  setTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
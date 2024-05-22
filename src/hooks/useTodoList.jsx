import { useQuery } from '@tanstack/react-query';
import { getToDoList } from '../api/todolist';

const TodoKey = {
  all: 'todo',
  list: () => [TodoKey.all],
  detail: (id) => [TodoKey.all, id],
};

export const useTodoList = () => {
  return useQuery({
    queryKey: TodoKey.list(),
    queryFn: () => {
      return getToDoList().then(({ data }) => data);
      // Axios는 data로 감싸주기 때문에 함수를 하나 더 만들어서 내부에서 호출해주기!
    },
  });
};

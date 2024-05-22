export const getToDoList = () => {
  const todo = localStorage.getItem('todos');
  // return todo ? JSON.parse(todo) : [];
  return Promise.resolve({
    data: todo ? JSON.parse(todo) : [],
  });
};

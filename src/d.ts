export type Responsibility = {
  title: string,
  name: string,
  checkboxes: string[],
};

export type Post = {
  name: string,
  price: number,
  amountTasks: number,
  id: string,
  responsibilities: Responsibility[],
};

export type PostsState = {
  postsList: Post[],
  currentPost: number,
  draggedPostIndex: number | null;
};

export type currentBarState = {
  bar: number,
};

export type Post = {
  name: string,
  price: number,
  amountTasks: number,
  id: string,
};

export type PostsState = {
  postsList: Post[],
  currentPost: number,
  draggedPostIndex: number | null;
};

export type currentBarState = {
  bar: number,
};

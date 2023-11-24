export type Post = {
  name: string,
  price: number,
  amountTasks: number,
  id: number,
};

export type PostsState = {
  postsList: Post[],
  currentPost: number,
};

export type currentBarState = {
  bar: number,
};

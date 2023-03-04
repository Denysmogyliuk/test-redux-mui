export type News = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type GetTopics = {
  start: number,
  limit: number,
}

export type InitialState = {
  byId: Record<string, News>,
  ids: string[],
  isLoading: boolean,
  error: string | undefined,
  maxId: number,
}
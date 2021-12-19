export type EntryId = string;
export type EntriesNumber =  5 | 10 | 25;

export interface FetchFeedParams {
  limit: number;
  before?: EntryId;
  after?: EntryId;
}

export type DateString = string;


export class FeedPost {
  constructor(
    public author: string,
    public created: string,
    public id: string,
    public thumbnail: string,
    public title: string,
    public score: string,
    public selfText: string,
    public numComments: number,
  ) {}
}

export interface ApiFeedPostData {
  author: string;
  created: string;
  id: string;
  thumbnail: string;
  title: string;
  score: string;
  selftext: string;
  num_comments: number;
}

export interface ApiFeed {
  kind?: string,
  data?: {
    after: string;
    before: string;
    dist: number;
    children: {
      kind?: string;
      data: ApiFeedPostData;
    }[];
  }
}

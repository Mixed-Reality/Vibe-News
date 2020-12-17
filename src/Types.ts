

export enum newsType{
  happy,
  sad,
  neutral,
}

export interface NewsArticle{

  source: {
    id: number | null,
    name: string
  },

  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string | null,
  publishedAt: string,
  content: string

}
import { IGatsbyImageData } from "gatsby-plugin-image";
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";

export interface IPost {
  title: string;
  slug: string;
  featureImage: IGatsbyImageData;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}
export interface IData {
  posts: {
    nodes: IPost[];
  };
}

export interface IBlogPostQuery {
  post: IPost;
}

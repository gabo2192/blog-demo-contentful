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

export interface ISEO {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  title?: string;
  article?: boolean;
  image?: string;
}

export interface ISiteData {
  site: {
    siteMetadata: {
      defaultTitle: string;
      titleTemplate: string;
      defaultImage: string;
      twitterUsername: string;
      defaultDescription: string;
      siteUrl: string;
    };
  };
}

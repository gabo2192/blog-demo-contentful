import { graphql, PageProps } from "gatsby";
import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
import { IBlogPostQuery, IPost } from "../types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost: React.FC<PageProps<IBlogPostQuery>> = ({ data }) => {
  const post: IPost = data.post;
  const image = getImage(post.featureImage);
  return (
    <Layout>
      <article>
        <h2 className="text-2xl text-indigo-600 font-bold text-center pb-5">
          {post.title}
        </h2>
        <div className="w-full text-center">
          <GatsbyImage image={image} alt={post.title} />
        </div>
        <div>{renderRichText(post.content)}</div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query Post($slug: String) {
    post: contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      featureImage {
        gatsbyImageData(aspectRatio: 2.35)
      }
      content {
        raw
      }
    }
  }
`;

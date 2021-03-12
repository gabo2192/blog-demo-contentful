import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { IData } from "../types";

const IndexPage: React.FC<PageProps<IData>> = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <Layout>
      <SEO title={"Home"} />
      <h2 className="p-5 text-xl">Last Posts:</h2>
      <div className="flex gap-5">
        {posts.map((post) => {
          const image = getImage(post.featureImage);
          return (
            <Link
              to={post.slug}
              key={post.slug}
              className="text-indigo-600 text-center font-bold hover:text-gray-500"
            >
              <article>
                <GatsbyImage image={image} alt={post.title} />
                <h3>{post.title}</h3>
              </article>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query AllPosts {
    posts: allContentfulBlog(limit: 3) {
      nodes {
        title
        slug
        featureImage {
          gatsbyImageData(formats: WEBP, layout: CONSTRAINED, width: 600)
        }
      }
    }
  }
`;

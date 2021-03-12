import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import Helmet from "react-helmet";
import * as React from "react";
import { ISEO, ISiteData } from "../types";

const SEO: React.FC<ISEO> = ({
  description = "",
  lang = "en",
  meta = [],
  title = "",
  article = false,
  image = "",
}) => {
  const { pathname } = useLocation();
  const { site }: ISiteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl
          defaultImage: image
          twitterUsername
        }
      }
    }
  `);
  const {
    siteMetadata: {
      siteUrl,
      defaultDescription,
      defaultImage,
      defaultTitle,
      twitterUsername,
      titleTemplate,
    },
  } = site;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  const metaDescription = description || defaultDescription;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: article ? "article" : "website",
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta || [])}
    />
  );
};

export default SEO;

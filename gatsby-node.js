const path = require('path');
const _ = require('lodash');

const { createFilePath } = require(`gatsby-source-filesystem`);

// Add Slug Field
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('./src/templates/blog-post.js');
  const listTemplate = path.resolve(`./src/templates/blog-list.js`);
  const tagTemplate = path.resolve(`./src/templates/blog-tags.js`);

  return graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            timeToRead
            frontmatter {
              title
              date(locale: "en-us", formatString: "DD MMM YYYY")
              description
              category
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `).then(result => {
    const posts = result.data.postsRemark.edges;
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: pageTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach(($, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: listTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });

    const tags = result.data.tagsGroup.group;

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue.toLowerCase())}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });
};

const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const ProductTemplate = path.resolve("./src/templates/product.tsx");
    resolve(
      graphql(
        `
          {
            allStrapiEkogroszeks {
              edges {
                node {
                  Nazwa
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allStrapiEkogroszeks.edges;
        posts.forEach((post) => {
          createPage({
            path: `/prodcuts/${post.node.Nazwa}/`,
            component: ProductTemplate,
            context: {
              slug: post.node.Nazwa,
            },
          });
        });
      })
    );
  });
};

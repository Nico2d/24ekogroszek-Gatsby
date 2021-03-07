const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const convertToSlug = (Text) => {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };

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
            path: `/produkty/${convertToSlug(post.node.Nazwa)}/`,
            component: ProductTemplate,
            context: {
              name: post.node.Nazwa,
            },
          });
        });
      })
    );
  });
};

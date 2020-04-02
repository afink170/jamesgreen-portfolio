/* eslint-disable @typescript-eslint/no-unused-vars */
const path = require(`path`);
const fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  if (node.internal.type === 'File' && node.extension === 'txt') {
    node.content = fs.readFileSync(node.absolutePath, 'utf-8');
    // console.log(node);
  }
};

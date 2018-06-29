import React, { Children } from 'react';

export /**
 * Utility function that traverses a React Component tree to find
 * a given element defined by type.
 *
 * @param {*} tree - React component tree
 * @param {string} qualifier - Identifier by `type` (i.e. 'input')
 * @param {object} newProp - callback function to call on this component node
 * @returns callback function
 */
const findChildByType = (tree, qualifier, newProp) => {
  return Children.map(
    tree,
    (child) => {
      const [key, val] = Object.entries(qualifier)[0];
      if (!child.props) return child;

      if (child[key] === val) {
        return React.cloneElement(child, {...child.props, ...newProp});
      };

      if (child.props.children) {
        return React.cloneElement(child, {
          props: child.props,
          children: findChildByType(child.props.children, qualifier, newProp)
        });
      }

    }
  )
}

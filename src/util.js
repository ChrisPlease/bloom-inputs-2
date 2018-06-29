import React, { Children } from 'react';

export /**
 * Utility function that traverses a React Component tree to find
 * a given element defined by type.
 *
 * @param {*} tree - React component tree
 * @param {object} qualifier - Object containing key/value pair to match, (i.e. {role: 'foo'})
 * @param {object} newProp - Object of the additional/overwritten prop to be passed
 * @returns modified React tree with updated child
 */
const editChildProps = (tree, qualifier, newProp) => {
  return Children.map(
    tree,
    (child) => {
      const [key, val] = Object.entries(qualifier)[0];

      if (!child.props) return child;

      if (child.props.children) {
        return React.cloneElement(
          child,
          child.props,
          editChildProps(child.props.children, qualifier, newProp)
        );
      }

      if (child[key] === val) {
        return React.cloneElement(
          child,
          {...child.props, ...newProp}
        );
      };
    }
  )
}

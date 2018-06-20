
const DEPRECATED_APIS = Object.create(null);
DEPRECATED_APIS.componentWillMount = 'UNSAFE_componentWillMount';
DEPRECATED_APIS.componentWillReceiveProps = 'UNSAFE_componentWillReceiveProps';
DEPRECATED_APIS.componentWillUpdate = 'UNSAFE_componentWillUpdate';

const renameDeprecatedCallExpressions = (path) => {
  if (DEPRECATED_APIS[path.node.value] && path.parent.type === 'ObjectProperty') {
    path.node.value = DEPRECATED_APIS[path.node.value];
  }
};

module.exports = function () {
  return {
    visitor: {
      Literal(path) {
        renameDeprecatedCallExpressions(path);
      },
    },
  };
};

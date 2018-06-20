# babel-plugin-react-rename-unsafe-lifecycle

Rename unsafe react lifecycle: componentWillMount by UNSAFE_componentWillMount, componentWillReceiveProps by UNSAFE_componentWillReceiveProps and componentWillUpdate by UNSAFE_componentWillUpdate

### Update your .babelrc if you want to continue using componentWill*

```json
{
  "plugins": [
    ["react-rename-unsafe-lifecycle"]
  ]
}
```

### Update Your package.json if you want to update your node_modules

```json
{
  "scripts": {
    "postinstall": "jscodeshift --silent --babel --transform ./node_modules/babel-plugin-react-rename-unsafe-lifecycle/lib/rename-unsafe-lifecycles.js */react-*/**.js --ignore-pattern */react-native/",
  }
}

```

Thx to jscodeshift ;)

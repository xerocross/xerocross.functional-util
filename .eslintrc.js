module.exports = {
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "env": {
        browser: true,
        commonjs: true,
        node: true
    },
    "extends": [
        "eslint:recommended",
    ],
    rules: {
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "indent": ["error", 4],
        "key-spacing": ["error", {
            "beforeColon": true,
            "afterColon": true,
            "mode": "strict"
        }]
    },
    globals: {
        "NODE_ENV" : false
    }
};
module.exports = {
  "mode": "development",
  "entry": "./src/index.jsx",
  "output": {
      "path": __dirname+'/static',
      filename: `isoapp.js`
  },
  "module": {
      "rules": [
          {
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "babel-loader",
                  "options": {
                      "presets": [
                          "@babel/preset-env",
                          "@babel/preset-react"
                      ]
                  }
              }
          }
      ]
  }
}
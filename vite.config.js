const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        lau: resolve(__dirname, "laura.html")
      }
    }
  }
};

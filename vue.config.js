const { defineConfig } = require("@vue/cli-service");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/globals.scss";
        @import "@/assets/scss/variables.scss";
        `,
      },
    },
  },
};

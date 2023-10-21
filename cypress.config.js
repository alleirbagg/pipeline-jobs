const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mdcq7u',

  e2e: {

    baseUrl: "http://lojaebac.ebaconline.art.br/",

    setupNodeEvents(on, config) { 

               

    },

  },

});
const webpack = require('webpack');

module.exports = {
    output: {
        filename: "main.js",
        libraryTarget: "amd"
    },
    externals: [{
        "q": true,
        "react": true,
        "react-dom": true
    },
        /^TFS\//, // Ignore TFS/* since they are coming from VSTS host 
        /^VSS\//  // Ignore VSS/* since they are coming from VSTS host
    ],
    resolve: {
        alias: { "OfficeFabric": "../node_modules/office-ui-fabric-react/lib-amd" }
    }
};
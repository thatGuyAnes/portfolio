// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   actions.setWebpackConfig({
//     node: {
//       fs: 'empty'
//     }
//   })
//   if(stage === 'build-html'){
//     actions.setWebpackConfig({
//       module: {
//         rules: [{
//           test: /splitting/,
//           use: loaders.null()
//         }]
//       }
//     })
//   }
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /splitting/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

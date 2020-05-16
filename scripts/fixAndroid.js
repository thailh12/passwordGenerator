const fs = require('fs');

// Replace react.gradle due to duplicate resources issues
function replaceReactGradle() {
  const content = fs.readFileSync('./scripts/react.gradle').toString();
  fs.writeFileSync('./node_modules/react-native/react.gradle', content);
}

replaceReactGradle();

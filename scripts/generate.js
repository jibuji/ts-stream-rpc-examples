const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create generated directory if it doesn't exist
execSync('mkdir -p src/calculator/generated');

const protoPath = path.join(__dirname, '../proto/calculator.proto');
const outputPath = path.join(__dirname, '../src/calculator/generated/calculator-service.ts');

// Debug: Check if proto file exists and print its contents
console.log('Proto file path:', protoPath);
console.log('Proto file contents:');
console.log(fs.readFileSync(protoPath, 'utf8'));

// Generate service code
try {
  execSync(
    `node node_modules/ts-stream-rpc/src/codegen/service-generator.js --proto ${protoPath} --out ${outputPath}`,
    { stdio: 'inherit' }
  );
} catch (error) {
  console.error('Error during code generation:', error);
  process.exit(1);
}

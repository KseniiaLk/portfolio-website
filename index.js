const { execSync } = require('child_process');
const path = require('path');

console.log('Starting portfolio deployment...');

try {
  // Change to client directory
  process.chdir(path.join(__dirname, 'client'));
  
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('Building React app...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Starting server...');
  execSync('npm run serve', { stdio: 'inherit' });
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}

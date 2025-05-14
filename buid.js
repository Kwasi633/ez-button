const fs = require('fs');
const path = require('path');

// Create lib directory
if (!fs.existsSync('lib')) {
    fs.mkdirSync('lib');
}

// Copy files with basic transformation
function simpleCopy(src, dest) {
    try {
        const content = fs.readFileSync(src, 'utf8');
        
        // Simple TypeScript removal
        let jsContent = content
            .replace(/: ReactNode/g, '')
            .replace(/: ComponentType<[^>]*>/g, '')
            .replace(/: string/g, '')
            .replace(/: number/g, '')
            .replace(/: boolean/g, '')
            .replace(/interface [^{]*{[^}]*}/g, '')
            .replace(/\?: /g, ': ')
            .replace(/: void/g, '');
        
        // Convert to .js
        const destPath = dest.replace(/\.tsx?$/, '.js');
        
        // Ensure destination directory exists
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        
        fs.writeFileSync(destPath, jsContent);
        console.log(`Converted ${src} to ${destPath}`);
    } catch (err) {
        console.error(`Error processing ${src}:`, err.message);
    }
}

// Process each file
simpleCopy('src/AppButton.tsx', 'lib/AppButton.js');
simpleCopy('src/AppButtonStyles.ts', 'lib/AppButtonStyles.js');

// Create index.js
fs.writeFileSync('lib/index.js', `
import AppButton from './AppButton';
export default AppButton;
export { default as AppButtonStyles } from './AppButtonStyles';
`);

console.log('Build completed!');
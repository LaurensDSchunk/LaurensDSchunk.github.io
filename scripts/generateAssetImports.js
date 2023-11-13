import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function addFilesInDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  let imports = '';

  files.forEach((file) => {
    if (file === '.DS_Store') {
      return;
    }

    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const fileName = (path.basename(file, path.extname(file))).replaceAll("-", "");
      imports += `import ${fileName} from '${filePath}';\n`;
    } else if (stat.isDirectory()) {
      imports += addFilesInDirectory(filePath);
    }
  });

  return imports;
}

const directoryPath = path.join(__dirname, '../src/assets');
const imports = addFilesInDirectory(directoryPath);

fs.writeFileSync('./src/assetImports.js', `${imports}\n\nexport default null;`);
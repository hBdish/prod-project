const fs = require('fs/promises');
const resolveRoot = require('../resolve-root');
const firstCharUpperCase = require('../normalize-name');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${sliceName}/${sliceName}';
export type { ${firstCharUpperCase(schemaName)} } from './model/types/${sliceName}-schema';`,
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};

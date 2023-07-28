const fs = require('fs/promises');
const resolveRoot = require('../resolve-root');
const firstCharUpperCase = require('../normalize-name');
const componentTemplate = require('./component-template');
const storyTemplate = require('./story-template');
const styleTemplate = require('./style-template');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log('Не удалось создать UI директорию');
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName);
      await fs.mkdir(resolveUIPath(sliceName));
      await fs.writeFile(
        resolveUIPath(componentName, `${sliceName}.tsx`),
        componentTemplate(componentName, sliceName),
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${sliceName}.stories.tsx`),
        storyTemplate(layer, componentName, sliceName),
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${sliceName}.module.scss`),
        styleTemplate(componentName),
      );
    } catch (e) {
      console.log('Не удалось создать компонент');
    }
  };

  await createUIDir();
  await createComponent();
};

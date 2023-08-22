import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example on\off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!removedFeatureName) {
  throw new Error('Enter feature name');
}

if (!featureState) {
  throw new Error('Enter feature state (on\\off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Enter feature state (on\\off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
// project.addSourceFilesAtPaths('src/**/article-details-page.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFeatures = false;

  node.forEachChild((child) => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFunctionName) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

const getAttributeNodeByName = (jsxAttributes: JsxAttribute[], name: string) =>
  jsxAttributes.find((node) => node.getNameNode()?.getText() === name);

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
  return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

  if (!objectOptions) return;

  const onFunctionProperty = objectOptions.getProperty('on');
  const offFunctionProperty = objectOptions.getProperty('off');
  const nameFunctionProperty = objectOptions.getProperty('name');

  const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const featureName = nameFunctionProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody().getText() ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody().getText() ?? '');
  }
};

const getReplaceComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (!value) return '';

  if (value.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);
  if (!attributes) return;

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');
  const featureNameAttribute = getAttributeNodeByName(attributes, 'name');

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) return;

  const offValue = getReplaceComponent(offAttribute);
  const onValue = getReplaceComponent(onAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((sourseFile) => {
  sourseFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      return replaceToggleFunction(node);
    }

    if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
      return replaceToggleComponent(node);
    }
    return '';
  });
});

project.save();

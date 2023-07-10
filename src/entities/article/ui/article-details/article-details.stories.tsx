import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config';
import { Theme } from 'app/providers';
import { ArticleDetails } from './article-details';
import { Article, ArticleBlockType, ArticleType } from '../../types/types';

/* eslint-disable */
const article: Article = {
  id: '1',
  title: 'Возможности JavaScript и TypeScript последних лет. Часть 1',
  subtitle: 'ECMAScript',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  views: 1251,
  createdAt: '26.06.2023',
  type: [ArticleType.IT],
  block: [
    {
      id: '5',
      type: ArticleBlockType.IMG,
      src: 'https://habrastorage.org/r/w1560/webt/ma/po/lv/mapolvqq4uunxfqoaviv3g9km9y.jpeg',
      title: 'Hello, world!',
    },
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'ES2020',
      paragraphs: [
        'Оператор опциональной последовательности / Optional chaining (?.): обычно используется для безопасного доступа к свойству потенциально несуществующего/неопределенного (undefined) объекта, но также может использоваться для безопасного доступа по индексу к элементу потенциально несуществующего массива и вызова потенциально несуществующей функции, например:',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.CODE,
      code: "// Раньше:\n// Если у нас был потенциально несуществующий объект,\n// мы не могли легко получить доступ к его свойству\nconst object: { name: string } | undefined = Math.random() > 0.5 ? undefined : { name: 'test' };\nconst value = object.name; // TypeError: 'object' is possibly 'undefined'\n\n// Мы должны были проверять \"определенность\" объекта\n// Это ухудшало читаемость кода и становилось сложным в случае вложенных объектов\nconst objectOld: { name: string } | undefined = Math.random() > 0.5 ? undefined : { name: 'test' };\nconst valueOld = objectOld ? objectOld.name : undefined;\n\n// Сейчас:\n// Мы можем использовать оператор опциональной последовательности\n// для безопасного доступа к свойству потенциально несуществующего объекта\nconst objectNew: { name: string } | undefined = Math.random() > 0.5 ? undefined : { name: 'test' };\nconst valueNew = objectNew?.name;\n\n// Его также можно использовать для безопасного доступа по индексу и вызова функции\nconst array: string[] | undefined = Math.random() > 0.5 ? undefined : ['test'];\nconst item = array?.[0];\nconst func: (() => string) | undefined = Math.random() > 0.5 ? undefined : () => 'test';\nconst result = func?.();",
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'ES2020',
      paragraphs: [
        'Оператор нулевого слияния / Nullish coalescing operator (??): является альтернативой оператора ||.',
        'Отличие между этими операторами состоит в том, что || применяется ко всем ложным значениям, а ?? — только к undefined и null, например:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: "const value: string | undefined = Math.random() > 0.5 ? undefined : 'test';\n\n// Раньше:\n// Для условного присвоения значения переменной мы использовали оператор `||`\nconst anotherValue = value || 'hello';\nconsole.log(anotherValue); // \"test\" или \"hello\"\n\n// Это не всегда работало хорошо\nconst incorrectValue = '' || 'incorrect';\nconsole.log(incorrectValue); // всегда \"incorrect\"\nconst anotherIncorrectValue = 0 || 'incorrect';\nconsole.log(anotherIncorrectValue); // всегда \"incorrect\"\n\n// Сейчас:\n// Оператор нулевого слияния применяется только в отношении `undefined` и `null`\nconst newValue = value ?? 'hello';\nconsole.log(newValue) // \"test\" или \"hello\"\n\n// Ложные значения не заменяются\nconst correctValue = '' ?? 'incorrect';\nconsole.log(correctValue); // всегда \"\"\nconst anotherCorrectValue = 0 ?? 'incorrect';\nconsole.log(anotherCorrectValue); // всегда 0",
    },
  ],
};

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
  args: {
  },
  decorators: [StoreDecorator({
    articleDetails: {
      data: article,
    },
  })],
};

export const PrimaryDark: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const Error: Story = {
  args: {

  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        error: 'Error',
      },
    }),
  ],
};

export const Loading: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

export const LoadingDark: Story = {
  args: {

  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};

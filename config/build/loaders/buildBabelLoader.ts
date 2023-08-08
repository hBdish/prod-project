import { BuildOptions } from '../types/config';
import babelRemovePlugin from '../../babel/babelRemovePlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && !isDev && [
            babelRemovePlugin,
            {
              props: ['data-testid'],
            },
          ],
        ].filter(Boolean),
      },
    },
  };
}

import webpack, {RuleSetRule} from "webpack";
import {BuildPath} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {buildPlugins} from "../build/buildPlugins";

// export const globalVariables = {
//   __IS_DEV__: true
// }

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  const globalVariables = new webpack.ProvidePlugin({
    // @ts-ignore
    '__IS_DEV__': true
  })
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if(/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i}
    }
    return rule
  })

  config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
  )

  config.module.rules.push(buildCssLoader(true))
  return config
}

import type { StorybookConfig } from '@storybook/nextjs';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: [
    './**/*.mdx',
    './**/*.stories.@(js|jsx|ts|tsx)',
    '../app/**/*.mdx',
    '../app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true, // Enables SWC support
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['..\\public'],
  webpackFinal: async (config) => {
    const rules = config?.module?.rules as RuleSetRule[];
    const imageRule = rules.find(
      (rule) => rule?.test instanceof RegExp && rule.test.test('.svg')
    );
    if (imageRule) {
      imageRule.exclude = /\.svg$/;
    }
    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
export default config;

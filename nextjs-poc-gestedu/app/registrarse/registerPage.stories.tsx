import type { StoryObj } from '@storybook/react';

import RegisterPage from './page';

export default {
  title: 'page/RegisterPage',
  component: RegisterPage,
};

type Story = StoryObj<typeof RegisterPage>;

export const Basic: Story = {};

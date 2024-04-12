import type { StoryObj } from '@storybook/react';
import './button.module.css';

import Button from './button';

export default {
  component: Button,
  title: 'component/Button',
};

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    styling: 'outline',
    children: 'Button Outline',
  },
};

export const Primary: Story = {
  args: {
    styling: 'primary',
    children: 'Button Primary',
  },
};

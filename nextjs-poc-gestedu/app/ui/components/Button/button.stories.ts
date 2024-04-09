import type { Meta, StoryObj } from '@storybook/react';
import './button.module.css';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'component/Button',
};
export default meta;

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

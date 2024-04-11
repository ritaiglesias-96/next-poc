import type { Meta, StoryObj } from '@storybook/react';
import './navbar.module.css';

import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'component/Navbar',
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
  args: {},
};

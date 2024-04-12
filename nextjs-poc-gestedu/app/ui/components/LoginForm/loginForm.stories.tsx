import type { StoryObj } from '@storybook/react';
import './loginForm.module.css';

import LoginForm from './loginForm';

export default {
  title: 'component/LoginForm',
  component: LoginForm,
};

type Story = StoryObj<typeof LoginForm>;

export const Basic: Story = {};

import type { StoryObj } from '@storybook/react';
import UserIcon from '@/ui/assets/svg/user.svg';
import KeyIcon from '@/ui/assets/svg/key.svg';

import InputField from './inputField';

export default {
  component: InputField,
  title: 'component/InputField',
};

type Story = StoryObj<typeof InputField>;

export const Basic: Story = {
  args: {
    placeholder: 'Nombre',
    type: 'text',
    name: 'name',
    label: 'Nombre',
    required: true,
  },
};

export const WithIcon = {
  args: {
    placeholder: 'Nombre',
    type: 'text',
    name: 'name',
    label: 'Nombre',
    required: true,
  },
  render: () => (
    <InputField {...WithIcon.args}>
      <UserIcon className='h-auto w-6 fill-garnet sm:w-8' />
    </InputField>
  ),
};

export const WithIconPassword = {
  args: {
    placeholder: 'Contraseña',
    type: 'password',
    name: 'pasword',
    label: 'Contraseña',
    required: true,
  },
  render: () => (
    <InputField {...WithIconPassword.args}>
      <KeyIcon className='h-auto w-6 fill-garnet sm:w-8' />
    </InputField>
  ),
};

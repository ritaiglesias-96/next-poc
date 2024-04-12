import { useState } from 'react';
import VisibilityIcon from '@/app/ui/assets/svg/visibility.svg';
import VisibilityOffIcon from '@/app/ui/assets/svg/visibility-off.svg';
import clsx from 'clsx';

interface InputFieldProps {
  className?: string;
  children?: React.ReactNode;
  placeholder: string;
  type: string;
  name: string;
  label: string;
  required: boolean;
}

export function InputField({
  children,
  placeholder,
  type,
  label,
  name,
  required,
  className,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={clsx('inputBox', className)}>
      <div className='flex w-full flex-row'>
        {children}
        <div className='flex w-full  flex-col'>
          <label
            htmlFor={name}
            className='px-3 py-0 text-sm font-semibold sm:text-base'
          >
            {label}
          </label>
          <input
            className='mx-3 w-full py-1 text-sm focus:outline-none sm:text-base'
            id={name}
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            name={name}
            placeholder={placeholder}
            required={required}
          />
        </div>
      </div>
      {type === 'password' && (
        <button type='button' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <VisibilityIcon className='h-auto w-6 fill-garnet sm:w-8' />
          ) : (
            <VisibilityOffIcon className='h-auto w-6 fill-garnet sm:w-8' />
          )}
        </button>
      )}
    </div>
  );
}

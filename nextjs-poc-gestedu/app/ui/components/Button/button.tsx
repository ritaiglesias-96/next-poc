import clsx from 'clsx';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  styling?: 'primary' | 'secondary' | 'pill' | 'link' | 'outline';
}

export function Button({
  children,
  className,
  styling = 'primary',
  ...rest
}: ButtonProps) {
  const stylingTypes = {
    primary: styles.primary,
    secondary: styles.secondary,
    pill: styles.pill,
    link: styles.link,
    outline: styles.outline,
  };

  return (
    <button
      {...rest}
      className={clsx(styles.button, stylingTypes[styling], className)}
    >
      {children}
    </button>
  );
}

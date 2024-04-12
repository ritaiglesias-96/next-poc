'use client';
import { createContext, useState, useContext } from 'react';

interface LoginModalState {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const LoginModalContext = createContext<LoginModalState | undefined>(
  undefined
);

export const LoginModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <LoginModalContext.Provider value={{ open, setOpen }}>
      {children}
    </LoginModalContext.Provider>
  );
};

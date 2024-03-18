import { cookies } from 'next/headers';

export const getTheme = () => {
  return cookies().get('theme')?.value ?? 'inherit';
};

export const getColor = () => {
  return cookies().get('color')?.value ?? 'indigo';
};
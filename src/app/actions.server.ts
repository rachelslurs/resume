'use server';

import { cookies } from 'next/headers';

export const setTheme = async (theme: string) => {
  console.log('set theme on server', theme)
  await cookies().set('theme', theme);
  return theme;
}

export const setColor = async (color: string) => {
  console.log('set color on server', color)
  await cookies().set('color', color);
  return color;
}

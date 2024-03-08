'use server';

import { cookies } from 'next/headers';

export const setThemeOnServer = async (theme: string) => {
  await cookies().set('theme', theme);
};
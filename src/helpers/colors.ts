import * as colors from '@radix-ui/colors';
import { Theme } from '../../edit-me/types/Config';
import resumeConfig from '../../edit-me/config/resumeConfig';
import { getColor } from 'src/app/actions.client';

const defaultTheme = resumeConfig.imageTheme;
const configAccent = getColor();
const configNeutral = resumeConfig.neutralColor;

/**
 * Get a Radix accent color based on your resume config
 * @param shade A number from 1 to 12 representing the Radix Colors shade
 * @returns The accent color string
 */
export const getAccentColor = (shade: number, theme = defaultTheme) => {
  console.log(configAccent, 'configAccent')
  const accent = theme === Theme.Dark ? `${configAccent}Dark` : configAccent;
  return accent[`${configAccent}${shade.toString()}` as keyof typeof accent];
};

/**
 * Get a Radix neutral color based on your resume config
 * @param shade A number from 1 to 12 representing the Radix Colors shade
 * @returns The neutral color string
 */
export const getNeutralColor = (shade: number, theme = defaultTheme) => {
  const neutral =
    //@ts-ignore
    colors[theme === Theme.Dark ? `${configNeutral}Dark` : configNeutral];
  return neutral[`${configNeutral}${shade}`];
};

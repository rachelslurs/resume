import { AccentColorsBright } from '../../edit-me/types/Config';
import { getColor } from 'src/app/actions.client';

const color = getColor()

const isBrightColor = (
  color: string,
): color is AccentColorsBright => {
  const brightColors = Object.values(AccentColorsBright) as Array<string>;
  return brightColors.includes(color);
};

export const contrastColor = isBrightColor(color)
  ? '#000'
  : '#fff';

import { VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import { buttonVariants } from './Button';
import { Button } from '@radix-ui/themes';
import { ButtonProps } from '@radix-ui/themes/dist/cjs/components/button';

export type ButtonLinkProps = LinkProps &
  VariantProps<typeof buttonVariants> & { className?: string; radius?: ButtonProps['radius'] };

export default function ButtonLink({
  children,
  className,
  size,
  radius,
  ...linkProps
}: PropsWithChildren<ButtonLinkProps>) {
  return (
    <Link
      className={className}
      {...linkProps}
    >
      <Button size='4' variant='surface' radius={radius} className={className}>
        {children}
      </Button>
    </Link>
  );
}

import { twMerge } from 'tailwind-merge';
import { Text } from '@radix-ui/themes'

interface ProseProps {
  className?: string;
  html: string;
}

const Prose: React.FC<ProseProps> = ({ className, html }) => {
  return (
    <Text
      className={twMerge(
        'prose mt-2 text-base text-neutral-12 [&>p]:mb-2',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;

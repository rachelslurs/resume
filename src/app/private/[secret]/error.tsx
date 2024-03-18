'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Heading } from '@radix-ui/themes';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // log the error if you need to
    console.error(error);
  }, [error]);

  return (
    <div className="container mt-12 text-center">
      <div className="rounded-xl bg-neutral-3 py-12">
        <Heading size={'2'}>
          {error.message}
        </Heading>

        <div className="mt-4">
          <Link href="/">Visit public résumé</Link>
        </div>
      </div>
    </div>
  );
}

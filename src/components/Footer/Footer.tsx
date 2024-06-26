import { personal } from '@content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from 'edit-me/config/links'
import React from 'react'
import { fullName } from 'src/helpers/utils'
import ButtonLink from '../Button/ButtonLink'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-neutral-3 py-12 text-neutral-12">
      <div className="container text-center">
        {links && (
          <div className="flex justify-center">
            <div className="grid grid-flow-col gap-2">
              {links.map((link) => (
                <ButtonLink
                  className="h-12 w-12 rounded-full p-0"
                  href={link.href}
                  key={link.title}
                >
                  <span className="sr-only">
                    {personal.givenName} on {link.title}
                  </span>
                  <FontAwesomeIcon aria-hidden icon={link.icon} size="lg" />
                </ButtonLink>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 font-extrabold tracking-tight">
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>

        <div className="mt-1 text-sm">
          <p>
            This resumé was generated with{' '}
            <a className="link" href="https://nextjs.org/">
              Next.js
            </a>{' '}
            and deployed on{' '}
            <a className="link" href="https://vercel.com/">
              Vercel
            </a>
            .
          </p>
          <p>
            Created using{' '}
            <a href="https://github.com/rachelslurs/resume">a fork</a> of the
            fabulous{' '}
            <a
              className="link"
              href="https://github.com/colinhemphill/nextjs-resume-generator"
            >
              nextjs-resume-generator
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

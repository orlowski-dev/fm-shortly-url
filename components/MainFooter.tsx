'use client'
import { default as footerLinks } from '@/data/footerLinks.json'
import { IFooterLink } from '@/data/interfaces'
import { LinkButton } from './Buttons'
import { facebookIcon, instagramIcon, pinterestIcon, twitterIcon } from '@/assets/icons'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'
import Image from 'next/image'

export const MainFooter = () => {

  return (
    <footer className="main-footer bg-very-dark-blue py-6">
      <div className="container grid justify-center p-6 mx-auto md:items-start">
        <div className="mb-12">
          <Image src="/brand/logo-white.svg" alt="logo" width={120} height={32} />
        </div>
        <ul className='grid gap-9 text-center md:grid-cols-3 md:text-left md:first-letter:gap-12'>
          <li>
            <ul>
              <li className='text-[1rem] text-white mb-5'>Features</li>
              {
                footerLinks['Features'].map((data: IFooterLink) => (
                  <li
                    className='mb-2'
                  ><LinkButton
                      type="no-bg"
                      href={data.link}
                      textContent={data.content}
                      customStyles='!p-0 !text-base'
                    />
                  </li>
                ))
              }
            </ul>
          </li>
          <li>
            <ul>
              <li className='text-[1rem] text-white mb-5'>Resources</li>
              {
                footerLinks['Resources'].map((data: IFooterLink) => (
                  <li
                    className='mb-2'
                  >
                    <LinkButton
                      type="no-bg"
                      href={data.link}
                      textContent={data.content}
                      customStyles='!p-0 !text-base' />

                  </li>
                ))
              }
            </ul>
          </li>
          <li>
            <ul>
              <li className='text-[1rem] text-white mb-5'>Company</li>
              {
                footerLinks['Company'].map((data: IFooterLink) => (
                  <li
                    className='mb-2'
                  ><LinkButton
                      type="no-bg"
                      href={data.link}
                      textContent={data.content}
                      customStyles='!p-0 !text-base'
                    />
                  </li>
                ))
              }
            </ul>
          </li>
        </ul>
        <div className="social-links flex gap-6 items-start justify-center mt-10 md:mt-0">
          <Link href='/' target='_blank'>
            <ReactSVG src={facebookIcon.src} desc='facebook icon' width={24} height={24} />
          </Link>
          <Link href='/' target='_blank'>
            <ReactSVG src={twitterIcon.src} desc='twitter icon' width={24} height={24} />
          </Link>
          <Link href='/' target='_blank'>
            <ReactSVG src={pinterestIcon.src} desc='pinterest icon' width={24} height={24} />
          </Link>
          <Link href='/' target='_blank'>
            <ReactSVG src={instagramIcon.src} desc='instagram icon' width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
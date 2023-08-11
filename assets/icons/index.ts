interface Icon {
  src: string,
  height: number,
  width: number,
  blurWidth?: number,
  blurHeight?: number
}

import { default as menu } from './icon-menu.svg'
import { default as facebook } from './icon-facebook.svg'
import { default as instagram } from './icon-instagram.svg'
import { default as pinterest } from './icon-pinterest.svg'
import { default as twitter } from './icon-twitter.svg'

export const menuIcon: Icon = menu
export const facebookIcon: Icon = facebook
export const instagramIcon: Icon = instagram
export const pinterestIcon: Icon = pinterest
export const twitterIcon: Icon = twitter
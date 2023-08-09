interface Icon {
  src: string,
  height: number,
  width: number,
  blurWidth?: number,
  blurHeight?: number
}

import { default as menu } from './icon-menu.svg'

export const menuIcon: Icon = menu
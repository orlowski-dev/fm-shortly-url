export interface INavLink {
  id: number,
  content: string,
  link: string
}

export interface IURLApiData {
  ok: string,
  result: {
    original_link: string,
    full_short_link: string
  }
  error?: string
}

export interface IHistoryData {
  originalLink: string,
  fullShortLink: string
}

export interface IStatisticData {
  id: number,
  icon: string,
  heading: string,
  content: string
}

export interface IFooterLink {
  content: string,
  link: string,
}

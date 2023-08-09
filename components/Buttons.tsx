import Link from 'next/link'

interface ILinkButtonPropsTypes {
  href: string,
  textContent: string,
  type: 'no-bg' | 'cyan-rounded',
  customStyles?: string,
  display?: string
}


const getButtonStyle = (type: string, custom: string | undefined, display = 'inline-block'): string => {
  const mainStyle = 'text-base font-bold px-6 py-2'
  let styles = ''

  switch (type) {
    case 'no-bg':
      styles = 'text-grayish-violet'
      break
    case 'cyan-rounded':
      styles = 'bg-cyan text-white rounded-3xl hover:opacity-50 transition-opacity'
      break
    default:
      break
  }

  return `${display} ${mainStyle} ${styles} ${custom && custom}`
}

export const LinkButton = ({ href, textContent, type, display, customStyles }: ILinkButtonPropsTypes) => {


  return (
    <Link
      href={href}
      className={getButtonStyle(type, customStyles, display)}
    >
      {textContent}
    </Link>
  )
}
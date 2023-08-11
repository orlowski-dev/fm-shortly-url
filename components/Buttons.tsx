import Link from 'next/link'

interface IButtonPropsTypes {
  textContent: string,
  type: 'no-bg' | 'cyan-rounded' | 'cyan-rounded-max',
  customStyles?: string,
  display?: string,
  attrs?: object
}

interface ILinkButtonPropsTypes extends IButtonPropsTypes {
  href: string,
}


const getButtonStyle = (type: string, custom: string | undefined, display = 'inline-block'): string => {
  const mainStyle = 'text-base font-bold px-6 py-2'
  let styles = ''
  const cyan = 'bg-cyan text-white hover:bg-cyan-saturated active:bg-cyan-saturated transition-background-color'

  switch (type) {
    case 'no-bg':
      styles = 'text-grayish-violet'
      break
    case 'cyan-rounded':
      styles = cyan + ' rounded-md'
      break
    case 'cyan-rounded-max':
      styles = cyan + ' rounded-[12.5rem]'
      break
    default:
      break
  }

  return `${display} ${mainStyle} ${styles} ${custom && custom}`
}

export const LinkButton = ({
  href,
  textContent,
  type,
  display,
  customStyles,
  attrs
}: ILinkButtonPropsTypes) => {
  return (
    <Link
      href={href}
      className={getButtonStyle(type, customStyles, display)}
      {...attrs}
    >
      {textContent}
    </Link>
  )
}

export const Button = ({
  textContent,
  type,
  display,
  customStyles,
  attrs
}: IButtonPropsTypes) => (
  <button
    className={getButtonStyle(type, customStyles, display)}
    {...attrs}
  >
    {textContent}
  </button>
)
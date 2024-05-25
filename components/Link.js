/* eslint-disable jsx-a11y/anchor-has-content */
import { motion } from 'framer-motion'
import Link from 'next/link'

const Animation = ({ hasAnimation, children }) => {
  return hasAnimation ? (
    <motion.div
      whileHover={{
        originX: 0,
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
      }}
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  )
}
const CustomLink = ({ href, children, hasAnimation = true, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    if (children)
      return (
        <Animation hasAnimation={hasAnimation}>
          <Link href={href}>
            <a {...rest}>{children}</a>
          </Link>
        </Animation>
      )
    return (
      <Animation hasAnimation={hasAnimation}>
        <Link href={href}>
          <a {...rest} />
        </Link>
      </Animation>
    )
  }

  if (isAnchorLink) {
    return (
      <Animation hasAnimation={hasAnimation}>
        <a href={href} {...rest} />
      </Animation>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink

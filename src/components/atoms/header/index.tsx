import React, { FC } from "react"

type HeaderProps = {
  title: string
}

const Header: FC<HeaderProps> = ({ children, title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <div>{children}</div>
    </header>
  )
}

export default Header

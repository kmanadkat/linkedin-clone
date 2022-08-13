import { MouseEventHandler } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@mui/material'

import { selectUser } from '../../Store/features/userSlice'

import './NavLink.scss'

interface NavLinkProps {
  Icon?: any
  title: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const NavLink = ({ Icon, title, onClick }: NavLinkProps) => {
  const { displayName, photoURL } = useSelector(selectUser)
  console.log('photo', photoURL)
  return (
    <div className="navlink" onClick={onClick}>
      {Icon && <Icon className="navlink__icon" />}
      {!Icon && (
        <Avatar className="navlink__icon" src={photoURL}>
          {displayName?.[0]}
        </Avatar>
      )}
      <h3 className="navlink__title">{title}</h3>
    </div>
  )
}

export default NavLink

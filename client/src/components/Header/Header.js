import React from 'react'
import AccountMenu from './AccountMenu'
import './styles.css'

export default function Header() {
  return (
    <header>
        <div className="profile"><AccountMenu /></div>
    </header>
  )
}
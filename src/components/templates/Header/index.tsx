import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from '../../Menu'
import { FiGithub } from 'react-icons/fi'

export function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <Navigation className="flex items-center justify-between relative bg-gray-900 px-6 sm:px-12 pt-4">
        <a
          href="https://gabrielrodrigues.vercel.app"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <FiGithub color="white" size={50} />
        </a>

        <div className="3xl:hidden pb-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex navbar-burger ml-auto items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200"
          >
            <List weight="bold" size={20} color="black" />
          </button>
        </div>
      </Navigation>
      {showMenu && (
        <div className="navbar-menu fixed top-0 left-0  bottom-0 w-5/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <Navigation
            className="relative flex flex-col pt-5 pl-3 py-40 h-full w-full bg-gray-200 overflow-y-auto"
            showMenu={showMenu}
          >
            <ul>
              <li className="mb-6">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex navbar-burger ml-auto items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200"
                >
                  <X weight="bold" size={20} color="black" />
                </button>
              </li>
              <li className="mb-6">
                <Link
                  to="/"
                  className="flex items-center justify-between hover:underline hover:decoration-indigo-700 hover:decoration-solid hover:underline-offset-4"
                >
                  Buscar por repositórios relacionados
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  to="/use-filters"
                  className="flex items-center justify-between hover:underline hover:decoration-indigo-700 hover:decoration-solid hover:underline-offset-4"
                >
                 Listar repositórios de um usuário com ordenação
                </Link>
              </li>
            </ul>
          </Navigation>
        </div>
      )}
    </>
  )
}

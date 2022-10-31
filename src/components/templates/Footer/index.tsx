import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Navigation } from '../../Menu'

export function Footer() {
  return (
    <footer className="flex relative bottom-0 items-center justify-between  bg-slate-300 px-6 py-8 sm:px-12 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div className="mr-10">
          <a
            href="https://gabrielrodrigues.vercel.app"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <FiGithub color="indigo" size={50} />
          </a>
        </div>
        <div>
          <Navigation>
            <ul>
              <li className="mb-1">
                <Link
                  to="/"
                  className="flex lg:text-xl md:text-sm sm:text-[12px] items-center justify-between hover:underline hover:decoration-indigo-700 hover:decoration-solid hover:underline-offset-4"
                >
                  Buscar por repositórios relativos
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/use-filters"
                  className="flex lg:text-xl md:text-sm sm:text-sm items-center justify-between hover:underline hover:decoration-indigo-700 hover:decoration-solid hover:underline-offset-4"
                >
                  Especificar busca
                </Link>
              </li>
            </ul>
          </Navigation>
        </div>
      </div>
      <div id="copy">
        <h2 className="text-md text-center">
          Develop by <br />
          <span className="font-semibold text-lg text-indigo-800 hover:underline hover:underline-offset-2 hover:decoration-indigo-700">
            <a
              href="https://gabrielrodrigues.vercel.app"
              target="_blank"
              rel="nofollow noreferrer"
            >
              @gabriel4420
            </a>
          </span>
        </h2>
      </div>
    </footer>
  )
}

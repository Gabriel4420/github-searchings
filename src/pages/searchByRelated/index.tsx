import { ChangeEvent, FormEvent, useState } from 'react'
import api from '../../api'
import { Footer } from '../../components/templates/Footer'

export function SearchByRelated() {
  const [username, setUserName] = useState('')

  const [repoName, setRepoName] = useState('')
  const [responseRepo, setResponseRepo] = useState([])

  async function getOneRepo(e: FormEvent) {
    e.preventDefault()
    try {
      const resp = await api.get(
        `/search/repositories?q=${repoName}+user%3A${username}`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
          },
        },
      )
      console.log(resp.data)
      setResponseRepo(resp.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1 className="font-sans text-center uppercase w-full font-semibold text-indigo-800 lg:text-xl md:text-lg sm:text-[8px] p-10">
        Busca por Repositórios Relacionados
      </h1>

      {responseRepo?.length > 0 ? (
        <form
          className="flex flex-col px-28  w-auto max-w-full "
          onSubmit={getOneRepo}
        >
          <label htmlFor="">Pesquise por um repositório:</label>
          <input
            type="text"
            value={repoName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRepoName(e.target.value)
            }
            className="rounded-lg py-3 border-gray-600 border-2 my-3 p-2 placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
            placeholder="Pesquise por um repositório"
          />
           <label htmlFor="">Digite o nome de usuário:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e: any) => setUserName(e.target.value)}
            placeholder="Digite o nome do usuário"
            className="rounded-lg py-3 border-gray-600 border-2 my-3 mb-6 p-2 placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
          />
          <div className="flex justify-center items-center">
            <button
              className="relative rounded-lg w-28 uppercase  text-sm font-medium p-3 transition duration-150 ease-in-out focus:outline-none focus:visible:ring-2 border-indigo-600 border-2 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              type="submit"
            >
              buscar
            </button>
          </div>
        </form>
      ) : (
        <form
          className="flex flex-col px-28 lg: h-[490px] md: h-[420px] sm: h-[380px] w-auto max-w-full "
          onSubmit={getOneRepo}
        >
          <label htmlFor="">Pesquise por um repositório:</label>
          <input
            type="text"
            value={repoName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRepoName(e.target.value)
            }
            className="rounded-lg py-3 border-gray-600 border-2 my-3 p-2 placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
            placeholder="Pesquise por um repositório"
          />
          <label htmlFor="">Digite o nome de um usuário:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e: any) => setUserName(e.target.value)}
            placeholder="Digite o nome do usuário"
            className="rounded-lg py-3 border-gray-600 border-2 my-3 mb-6 p-2 placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
          />
          <div className="flex justify-center items-center">
            <button
              className="relative rounded-lg w-28 uppercase  text-sm font-medium p-3 transition duration-150 ease-in-out focus:outline-none focus:visible:ring-2 border-indigo-600 border-2 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              type="submit"
            >
              buscar
            </button>
          </div>
        </form>
      )}

      {responseRepo?.length > 0 && (
        <h1 className="font-sans text-center uppercase w-full font-semibold text-indigo-800 lg:text-xl md:text-lg sm:text-[8px] p-10">
          Resultado da busca: {repoName}
        </h1>
      )}

      <ul role="list" className="p-6 divide-y divide-slate-400 ">
        {responseRepo?.map((items: any, index: number) => {
          return (
            <li
              className="flex py-4 first:pt-0 last:pb-0 text-sm capitalize text-indigo-800"
              key={index}
            >
              {items.full_name}
            </li>
          )
        })}
      </ul>
      <Footer />
    </>
  )
}

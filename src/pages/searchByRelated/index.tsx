import { ChangeEvent, FormEvent, useState } from 'react'
import api from '../../api'

export function SearchByRelated() {
  const [username, setUserName] = useState('')

  const [repoName, setRepoName] = useState('')
  const [responseRepo, setResponseRepo] = useState([])

  async function getOneRepo(e: FormEvent) {
    e.preventDefault()
    try {
     
      const resp = await api.get(
        `search/repositories?q=${repoName}+user:${username}&per_page=10`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
          },
        },
      )

      setResponseRepo(resp.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <form className="flex flex-col px-28 h-[390px]" onSubmit={getOneRepo}>
          <h1 className="font-sans text-center uppercase font-semibold text-indigo-800 text-xl p-10">
            Busca por Repositórios Relacionados
          </h1>
          <input
            type="text"
            value={repoName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRepoName(e.target.value)
            }
            className="rounded-lg py-3 border-gray-600 border-2 my-3 p-2 placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
            placeholder="Pesquise por um repositório"
          />
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

        <ul role="list" className="p-6 divide-y divide-slate-400">
          {responseRepo?.map((items: any, index: number) => {
            return (
              <li
                className="flex py-4 first:pt-0 last:pb-0 text-sm capitalize text-indigo-800"
                key={index}
              >
                {items.name}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

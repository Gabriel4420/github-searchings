import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import api from '../../api'

export function EspecifySearch() {
  const [username, setUserName] = useState('')
  const [selectedOption, setSelectedOption] = useState<String | undefined>()
  const [selectedOptionList, setSelectedOptionList] = useState<
    String | undefined
  >()
  const [count, setCount] = useState(1)
  const [allRepos, setAllRepos] = useState([])

  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedOption(value)
  }

  const selectChangeList = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedOptionList(value)
  }
  useEffect(() => {
    async function getAllRepos() {
      try {
        const resp = await api.get(
          `users/${username}/repos?page=${count}&sort=${selectedOptionList}&direction=${selectedOption}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
            },
          },
        )

        setAllRepos(resp.data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllRepos()
  }, [count, username, selectedOptionList, selectedOption])
  return (
    <>
      <div className="p-10 flex flex-col ">
        <h1 className="font-sans text-center uppercase font-semibold text-indigo-800 lg:text-xl p-10 md:text-md sm:text-sm">
          Listar repositórios de um usuário com filtros
        </h1>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e: any) => setUserName(e.target.value)}
          placeholder="Digite um nome de usuário"
          className="p-1 py-3  my-4 border-2 border-indigo-400 rounded-lg placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
        />
        <div className="flex justify-start items-center">
          <label className="text-sm pr-3" htmlFor="nextPage">
            Página?
          </label>
          <input
            type="number"
            min="1"
            name="nextPage"
            value={count}
            onChange={(e: any) => setCount(e.target.value)}
            className="p-2 py-3 my-4 border-2 w-14 border-indigo-400 rounded-lg shadow-md shadow-indigo-500/40"
          />
        </div>

        <div className="flex relative w-full">
          <select
            className="block appearance-none mr-1 w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border  border-indigo-500 hover:border-indigo-700 shadow-md shadow-indigo-500/40"
            onChange={selectChange}
          >
            <option disabled>Selecione como deseja ordenar</option>
            <option value="asc">ordem - crescente</option>
            <option value="desc">ordem - decrescente</option>
          </select>

          <select
            className="block appearance-none mr-1 w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border  border-indigo-500 hover:border-indigo-700 shadow-md shadow-indigo-500/40"
            onChange={selectChangeList}
          >
            <option disabled>Selecione como deseja listar</option>
            <option value="full_name">nome inteiro</option>
            <option value="created">data de criação</option>
            <option value="updated">data de atualização</option>
            <option value="pushed">data de envio</option>
          </select>
        </div>
      </div>

      <ul className="p-10">
        {allRepos.length === 0 ? (
          <h1 className="font-sans text-center font-semibold text-indigo-800 text-xl p-5">
            Não tem mais repositórios
          </h1>
        ) : (
          allRepos.map((item: any, index: any) => (
            <li
              className="flex py-4 first:pt-0 last:pb-0 text-sm capitalize text-indigo-800"
              key={index}
            >
              {item.name}
            </li>
          ))
        )}
      </ul>
    </>
  )
}

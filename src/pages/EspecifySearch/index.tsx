import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

import { Footer } from '../../components/templates/Footer'
import { useGetAllRepos } from '../../hooks/useGetAllRepos'

export function EspecifySearch() {
  //States

  const [username, setUserName] = useState('')

  const [selectedOption, setSelectedOption] = useState<String | undefined>()

  const [selectedOptionList, setSelectedOptionList] = useState<
    String | undefined
  >()

  const [count, setCount] = useState(2 - 1)

  const [allRepos, setAllRepos] = useState([])

  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedOption(value)
  }

  const selectChangeList = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedOptionList(value)
  }

  useGetAllRepos({
    selectedOption,
    username,
    setAllRepos,
    selectedOptionList,
    count,
  })

  return (
    <>
      <div className="p-10 flex flex-col ">
        <h1 className="font-sans text-center uppercase font-semibold text-indigo-800 lg:text-xl p-10 md:text-md sm:text-sm">
          Listar repositórios de um usuário com ordenação
        </h1>
        <label htmlFor="">Pesquise por um usuário:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e: any) => setUserName(e.target.value)}
          placeholder="Digite um nome de usuário"
          className="p-1 py-3  my-4 border-2 border-indigo-400 rounded-lg placeholder:text-gray-500 pl-3 shadow-md shadow-indigo-500/40 focus:outline-none"
        />

        <div className="flex relative w-full">
          <select
            className="block appearance-none mr-1 w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border  border-indigo-500 hover:border-indigo-700 shadow-md shadow-indigo-500/40"
            onChange={selectChange}
          >
            <option>Ordenar por:</option>
            <option value="asc">ordem - crescente</option>
            <option value="desc">ordem - decrescente</option>
          </select>

          <select
            className="block appearance-none mr-1 w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border  border-indigo-500 hover:border-indigo-700 shadow-md shadow-indigo-500/40"
            onChange={selectChangeList}
          >
            <option>Listar por:</option>
            <option value="full_name">nome inteiro</option>
            <option value="created">data de criação</option>
            <option value="updated">data de atualização</option>
            <option value="pushed">data de envio</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center px-11 pb-10">
        <button>
          <ArrowCircleLeft
            size={30}
            color="indigo"
            onClick={() => setCount(count - 1)}
          />
        </button>
        {allRepos.length == 0 ? (
          ''
        ) : (
          <button>
            <ArrowCircleRight
              size={30}
              color="indigo"
              onClick={() => setCount(count + 1)}
            />
          </button>
        )}
      </div>

      <ul className="p-10">
        {allRepos.length === 0 || username == '' ? (
          <h1 className="font-sans text-center font-semibold text-indigo-800 text-xl p-5">
            Não tem mais repositórios
          </h1>
        ) : (
          allRepos.map((item: any, index: any) => (
            <li
              className="flex py-4 first:pt-0 last:pb-0 text-sm capitalize text-indigo-800"
              key={index}
            >
              <a
                target="blank"
                href={item.html_url}
                rel="nofollow noreferrer"
                className="hover:underline-offset-2 hover:decoration-indigo-700 hover:underline"
              >
                {item.name}
              </a>
            </li>
          ))
        )}
      </ul>

      <Footer />
    </>
  )
}

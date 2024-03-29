import { ChangeEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Footer } from '../../components/templates/Footer'
import { useGetOneRepo } from '../../hooks/useGetOneRepo'
import { useMediaQuery } from 'react-responsive'
import { langs } from '../../helpers/langs'
import ListResponse from '../../components/Mols/ListResponse'

export function SearchByRelated() {
  const [username, setUserName] = useState('')
  const [language, setLanguage] = useState<String | undefined>()
  const [repoName, setRepoName] = useState('')
  const [checked, setChecked] = useState(false)
  const [responseRepo, setResponseRepo] = useState([])
  const isMobile = useMediaQuery({ query: '(max-width:430px)' })
  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setLanguage(value)
  }



  return (
    <>
      <h1 className="font-sans text-center uppercase w-full font-semibold text-indigo-800 lg:text-xl md:text-lg sm:text-[8px] p-10">
        Busca por Repositórios Relacionados
      </h1>

      {responseRepo?.length > 0 ? (
        /* RETORNA BUSCA DO FORMULÁRIO */
        <form
          className="flex flex-col lg:px-28 md:px-3 sm:px-10  w-auto max-w-full "
          onSubmit={(event) =>
            useGetOneRepo({
              event,
              repoName,
              username,
              language,
              setResponseRepo,
              archived: checked,
            })
          }
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
            required
          />

          <div className="flex items-center justify-between pb-20 relative w-full">
            <div className="flex flex-col">
              <label htmlFor="">Linguagem</label>
              <select
                className="block appearance-none mr-1 w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border  border-indigo-500 hover:border-indigo-700 shadow-md shadow-indigo-500/40"
                onChange={selectChange}
                required
              >
                <option> Selecione uma linguagem</option>
                {langs.map((item: any, index: number) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.title}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="form-check form-switch">
                <input
                  className="form-check-input flex appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={() => setChecked(!checked)}
                />
                <label
                  className="form-check-label inline-block text-gray-800 sm: text-sm"
                  htmlFor="flexSwitchCheckDefault"
                  onClick={() => setChecked(!checked)}
                >
                  É arquivado ?
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="relative rounded-lg  flex justify-center items-center w-32 uppercase  text-sm font-bold p-3 transition duration-150 ease-in-out focus:outline-none focus:visible:ring-2 border-indigo-600 border-2 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              type="submit"
            >
              <span className="mr-2">Buscar</span>
              <FiSearch size={30} />
            </button>
          </div>
        </form>
      ) : (
        /* FORMULÁRIO SEM SUBMIT */
        <form
          className="flex flex-col lg:px-28 md:px-3 sm: px-10 lg: h-[490px] md: h-[420px] sm: h-[420px] w-auto max-w-full "
          onSubmit={(event) =>
            useGetOneRepo({
              event,
              repoName,
              username,
              language,
              setResponseRepo,
              archived: checked,
            })
          }
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
            required
          />

          <div className="flex items-center justify-between pb-20 relative w-full">
            <div className="flex flex-col">
              <label htmlFor="">Linguagem</label>
              <select
                className="block appearance-none mr-1 w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none border  border-indigo-500 hover:border-indigo-700 shadow-md shadow-indigo-500/40"
                onChange={selectChange}
              >
                <option> Selecione uma linguagem</option>
                {langs.map((item: any, index: number) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.title}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="flex items-center lg:justify-start sm:justify-center">
              <div
                className={`${isMobile
                  ? 'flex flex-col-reverse items-center form-check  form-switch'
                  : 'form-check  form-switch'
                  }`}
              >
                <input
                  className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={() => setChecked(!checked)}
                />
                <label
                  className="form-check-label inline-block text-gray-800 "
                  htmlFor="flexSwitchCheckDefault"
                  onClick={() => setChecked(!checked)}
                >
                  É arquivado ?
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="relative rounded-lg  flex justify-center items-center w-32 uppercase  text-sm font-bold p-3 transition duration-150 ease-in-out focus:outline-none focus:visible:ring-2 border-indigo-600 border-2 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              type="submit"
            >
              <span className="mr-2 ">Buscar</span>
              <FiSearch size={30} />
            </button>
          </div>
        </form>
      )}


      {responseRepo?.length > 0 ? (
        <h1 className="font-sans text-center uppercase w-full font-semibold text-indigo-800 lg:text-xl md:text-lg sm:text-[8px] p-10">
          Resultado da busca: {repoName}
        </h1>
      ) : checked ? (
        <h1 className="font-sans text-center uppercase w-full font-semibold text-indigo-800 lg:text-xl md:text-lg sm:text-[8px] p-10">
          Não foi encontrado nenhum resultado da busca: {repoName} como
          arquivado
        </h1>
      ) : (
        <h1 className="font-sans text-center uppercase w-full font-semibold text-indigo-800 lg:text-xl md:text-lg sm:text-[8px] p-20">
          Ainda não fez nenhuma busca ? É só digitar o repositório que deseja
          buscar !!!
        </h1>
      )}

      {responseRepo?.length > 0 && <ListResponse responseRepo={responseRepo} />}


      <Footer />
    </>
  )
}

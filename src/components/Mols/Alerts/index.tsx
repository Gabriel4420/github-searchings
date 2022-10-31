const Alerts = (responseRepo: any, checked: any, repoName: string) => {
    return (<>{responseRepo?.length > 0 ? (
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
    )
    }</>)
}

export default Alerts
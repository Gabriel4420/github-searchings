const ListResponse = (responseRepo: any) => {
  console.log(responseRepo)
  return (
    <ul role="list" className="p-6 divide-y divide-slate-400 ">
      {responseRepo.responseRepo?.map((items: any, index: number) => {
        return (
          <li
            className="flex py-4 first:pt-0 last:pb-0 text-sm capitalize text-indigo-800"
            key={index}
          >
            <a
              target="blank"
              href={items?.html_url}
              rel="nofollow noreferrer"
              className="hover:underline-offset-2 hover:decoration-indigo-700 hover:underline"
            >
              {items?.full_name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default ListResponse

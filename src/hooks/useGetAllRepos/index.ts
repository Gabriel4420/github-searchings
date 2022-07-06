import { useEffect } from 'react'
import api from '../../api'

export interface useGetAllRepos {
  
  username: string
  setAllRepos: (resp: any) => void
  selectedOptionList: String | undefined
  selectedOption: String | undefined
  count: number
}

export function useGetAllRepos(props: useGetAllRepos) {
  useEffect(() => {
    async function getAllRepos() {
      try {
        const resp = await api.get(
          `users/${props.username}/repos?sort=${props.selectedOptionList}&page=${props.count}&direction=${props.selectedOption}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
            },
          },
        )
        
        props.setAllRepos(resp.data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllRepos()
  }, [
    props.count,
    props.username,
    props.selectedOptionList,
    props.selectedOption,
  ])
}

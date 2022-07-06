import { FormEvent } from 'react'
import api from '../../api'

export interface useGetOneRepoProps {
  event: FormEvent
  repoName: string
  username: string
  language?: string
  setResponseRepo: (resp: any) => void
}

export async function useGetOneRepo(props: useGetOneRepoProps) {
  props.event.preventDefault()
  try {
    const resp = await api.get(
      `/search/repositories?q=${props.repoName}+user%3A${props.username}+language%3A${props.language}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
        },
      },
    )
   
    props.setResponseRepo(resp.data.items)
  } catch (error) {
    console.log(error)
  }
}

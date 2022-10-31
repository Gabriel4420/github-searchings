import { FormEvent } from 'react'
import api from '../../api'

export interface useGetOneRepoProps {
  event: FormEvent
  repoName: string
  username?: string
  language?: String | undefined
  archived?: boolean
  setResponseRepo: (resp: any) => void
}

export async function useGetOneRepo(props: useGetOneRepoProps) {
  props.event.preventDefault()
  try {
    const resp = await api.get(
      `${
         props.archived
          ? `search/repositories?q=archived%3Atrue+l%3A${props.language}+${props.repoName}&type=Repositories`
          : `search/repositories?l=${props.language}&q=l%3A${props.language}+${props.repoName}&type=Repositories`
      }`,
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

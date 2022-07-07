import { FormEvent } from 'react'
import api from '../../api'

export interface useGetOneRepoProps {
  event: FormEvent
  repoName: string
  username: string
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
          ? `/search/repositories?q=${props.repoName}+archived%3Atrue${
              props.username && `+user%3A${props.username}`
            }&l=${props.language}`
          : `/search/repositories?q=${props.repoName}+archived%3Afalse${
              props.username && `+user%3A${props.username}`
            }&l=${props.language}`
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

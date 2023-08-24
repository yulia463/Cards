import { instance } from 'common/api/common.api'

export const packsApi = {
  getPacks: () => {
    return instance.get<FetchPacksResponseType>('cards/pack', {
      params: {
        //❗Ваш user_id
        user_id: '6435620aaf58963e887fb0f4',
        pageCount: 20,
      },
    })
  },
  createPack: (cardsPack: ArgCreatePackType) => {
    return instance.post<CreatePackResponseType>('cards/pack', { cardsPack })
  },
  removePack: (id: string) => {
    return instance.delete<RemovePackResponseType>(`cards/pack?id=${id}`)
  },
  updatePack: (cardsPack: PackType) => {
    return instance.put<UpdatePackResponseType>('cards/pack', { cardsPack })
  },
}

// Types
export type PackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}

export type FetchPacksResponseType = {
  cardPacks: PackType[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export type CreatePackResponseType = {
  newCardsPack: PackType
  token: string
  tokenDeathTime: number
}

export type RemovePackResponseType = {
  deletedCardsPack: PackType
  token: string
  tokenDeathTime: number
}

export type UpdatePackResponseType = {
  updatedCardsPack: PackType
  token: string
  tokenDeathTime: number
}

export type ArgCreatePackType = {
  name?: string
  deckCover?: string
  private?: boolean
}

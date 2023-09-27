export type ResponseUserType = {
    avatar: string
    id: string
    email: string
    isEmailVerified: boolean
    name: string
    created: string
    updated: string
}

export type SignUpArgsType = {
    html?: string
    name?: string
    password: string
    email: string
    subject?: string
    sendConfirmationEmail?: boolean
}

export type RequestForgotPassword = {
    html?: string
    subject?: string
    email: string
}
export type Sort = {
    key: string
    direction: 'asc' | 'desc'
} | null

export type PaginatedEntity<T> = {
    pagination: Pagination
    items: T[]
}
export type Pagination = {
    totalPages: number
    currentPage: number
    itemsPerPage: number
    totalItems: number
}
export type PaginatedRequest<T> = {
    currentPage?: Pagination['currentPage']
    itemsPerPage?: Pagination['itemsPerPage']
} & T


export type GetDecksArgs = PaginatedRequest<{
    minCardsCount?: number
    maxCardsCount?: number
    name?: string
    authorId?: Author['id']
    orderBy: string | null
}>

export type DecksResponse = PaginatedEntity<Deck> & {
    maxCardsCount: number
}

export type CreateGetDeckArgs = {
    name: string
    isPrivate?: boolean
}

export type Author = {
    id: string
    name: string
}

export type Deck = {
    id: string
    userId: string
    name: string
    isPrivate: boolean
    shots: number
    cover?: string | null
    grade: number
    isDeleted?: boolean
    isBlocked?: boolean
    created: string
    updated: string
    cardsCount: number
    author: Author
}

export type DeckResponse = {
    author: DeckResponseAuthor
    id: string
    userId: string
    name: string
    isPrivate: boolean
    shots: number
    cover: string
    grade: number
    created: string
    updated: string
    cardsCount: number
}
export type DeckResponseAuthor = {
    id: string
    name: string
}

export type LearnDeckResponse = {
    id: string
    deckId: string
    userId: string
    question: string
    answer: string
    shots: number
    answerImg: string
    questionImg: string
    questionVideo: string
    answerVideo: string
    grade: number
    created: string
    updated: string
}

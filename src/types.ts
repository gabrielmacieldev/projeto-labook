export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    createdAt: string
}
export interface PostDB {
    id: string,
    creatorId: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updateAt: string
}

export interface LikesDislikesDB {
    userId: string,
    postId: string,
    like: number
}
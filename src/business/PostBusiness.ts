import { BaseDatabase } from "../database/BaseDatabase"
import { PostDatabase } from "../database/PostDatabase"
import { PostDB } from "../types"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase
    ) { }

    public getPosts = async (q: string | undefined) => {

        if (q) {

            const getByName = await this.postDatabase.getPostByName(q)
            return getByName
        } else {
            const result = await this.postDatabase.getAllPost()
            return result

        }

        // const posts: Post[] = postDB.map((postDB) => new Post(
        // ))

    }
}
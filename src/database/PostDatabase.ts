import { PostDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_POST = "posts"

    public getAllPost = async () => {

        const postsDB = await BaseDatabase
            .connection(PostDatabase.TABLE_POST)
            .select()

        return postsDB
    }

    // public insertUser = async () => {
    //     const postsDB = await BaseDatabase
    //         .connection(PostDatabase.TABLE_POST)
    //         .insert()

    //     return postsDB
    // }

    public getPostByName = async (q: string) => {
        const result: PostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POST)
            .where("content", "LIKE", `%${q}%`)

        return result
    }
}

// public async findAllPost(id: string) {
//     const [ postDB ]: PostDB[] | undefined[] = await BaseDatabase
//         .connection(PostDatabase.TABLE_POST)
//         .where({ id })

//     return postDB
// }

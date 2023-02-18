import { UserDatabase } from "../database/UserDatabase"
import { User } from "../models/User"
import { UserDB } from "../types"


export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase
    ) { }

    public signup = async (input: any) => {

        const { id, name, email, password, role } = input

        if (typeof id !== "string") {
            throw new Error("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new Error("'name' deve ser string")
        }

        if (typeof email !== "string") {
            throw new Error("'email' deve ser string")
        }

        if (typeof password !== "string") {
            throw new Error("'password' deve ser string")
        }
        if (typeof role !== "string") {
            throw new Error("'role' deve ser string")
        }

        const userDBExists = await this.userDatabase.findUserById(id)

        if (userDBExists) {
            throw new Error("'id' já existente");
        }

        const newUser = new User(
            id,
            name,
            email,
            password,
            role,
            new Date().toISOString()
        )

        const newUserDB: UserDB = {
            id: newUser.getId(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            role: newUser.getRole(),
            createdAt: newUser.getCreatedAt()
        }

        await this.userDatabase.insertUser(newUserDB)

        const outPut = {message: "O Cadastro foi realizado com sucesso!"}
        return outPut
    }
}
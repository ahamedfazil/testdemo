import { User } from '../models/User'

export default interface IStore {
    users: User[];
}
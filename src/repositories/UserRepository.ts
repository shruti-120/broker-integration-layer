import { User } from "../models/User";

export class UserRepository {
    private users = new Map<string, User>();

    addUser(user: User) {
        this.users.set(user.userId, user);
    }

    getUser(userId: string): User | undefined {
        return this.users.get(userId);
    }

    hasUser(userId: string): boolean {
        return this.users.has(userId);
    }
}
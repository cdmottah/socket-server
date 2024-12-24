

class UserService {
    constructor() {
        this.users = [
            { name: 'cristian' },
            { name: 'julio' },
            { name: 'luisa' },
            { name: 'manuel' },
            { name: 'alejo' },
            { name: 'alison' },

        ]
    }

    async create(data) {
        this.users.push(data);
        return data;
    }

    async find() {
        return this.users;
    }

    async findOne(name) {
        const index = await this.#findByName(name);
        return this.users[index];
    }

    async update(name, changes) {
        const index = await this.#findByName(name);
        this.users[index] = {
            ...this.users[index],
            ...changes,
        };
        return this.users[index]
    }

    async delete(name) {
        const index = await this.#findByName(name);
        this.users.splice(index, 1);
        return { name };
    }

    async #findByName(name) {
        const index = this.users.findIndex(item => item.name === name);
        if (index === -1) {
            throw new Error('User not found');
        }
        return index
    }
}

module.exports = UserService;

class user {
    constructor(id, username, name, bio, dateCreated, lastUpdated) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    get getusername() {
        return this.username;
    }
    get getname() {
        return this.name;
    }
    get getbio() {
        return this.bio;
    }
    get getdateCreated() {
        return this.dateCreated;
    }
    get getlastUpdated() {
        return this.lastUpdated;
    }
}

module.exports = user;
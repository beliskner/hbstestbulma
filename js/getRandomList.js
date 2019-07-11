let getRandomList = () => {
    let list = ["bastimpie", "macho", "jofuz", "woude", "wimpie", "koenkie", "huibie"];
    let limit = Math.floor(Math.random() * (list.length) -1);

    list = list.slice(limit);
    if (list.includes("bastimpie")) {
        list = ["bastimpie", "bastimpie", "bastimpie", "bastimpie", "bastimpie"];
    }

    return list;
}

module.exports.getRandomList = getRandomList;
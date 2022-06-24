function abbrevName(name) {
    let f = 0;
    let s = 0;
    let arrName = name.split(" ");
    for (let i = 0; i < arrName.length; i++) {
        for (let j = 0; j < arrName[i].length; j++) {
            f = arrName[0][0].toUpperCase();
            s = arrName[1][0].toUpperCase();
        }
        return `${f}.${s}`
    }
}
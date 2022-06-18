function solution(str, ending) {
    let end = str.substr(str.length - ending.length, str.length);
    console.log(end);
    if (end === ending) {
        return true;
    } else {
        return false;
    }
}
solution("asd", "sd");
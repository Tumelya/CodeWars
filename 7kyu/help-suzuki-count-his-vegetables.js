function countVegetables(string) {
    let veg = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
    let list = string.split(" ");
    let result = {};
    let k = 0;
    for (let i = 0; i < veg.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (veg[i] === list[j]) {
                k += 1;
                result = result.push([k, veg[i]]);
            }
        }
    }
    console.log(result);
    return result;
}
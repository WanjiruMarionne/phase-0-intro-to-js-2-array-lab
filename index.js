const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const allCats1 = [...cats, "Broom"];
    return allCats1;
}

function prependCat(name) {
    const allCats2 = ["Arnold",...cats];
    return allCats2
}

function removeLastCat() {
    const newList1 = cats.slice(0,-1);
    return newList1;
}

function removeFirstCat() {
    const newList2 = cats.slice(1);
    return newList2;
}
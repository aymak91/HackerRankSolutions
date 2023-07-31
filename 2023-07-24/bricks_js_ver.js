



const brickSmash = (bigHits, newtons) => {
    let idxs = {};

    for (let i = 0; i < newtons.length; i++) {
        idxs[newtons[i]] = i + 1
    }

    let count = 0;
    let bigHitsArr = [];
    let smallHits = [];

    newtons.sort();

    while (newtons.length > 0) {
        let brick = newtons.pop();
        if (bigHits) {
            bigHits -= 1;
            count += 1;
            bigHitsArr.push(idxs[brick]);
        } else {
            count += brick;
            smallHits.push(idxs[brick]);
        };
    };

    if (bigHitsArr.length !== 0) {
        bigHitsArr.sort();
    } else {
        bigHitsArr.push(-1);
    };

    if (smallHits) {
        smallHits.sort();
    } else {
        smallHits.push(-1);
    };

    return [[count], bigHitsArr, smallHits];
};
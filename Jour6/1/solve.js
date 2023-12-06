const unsolvedcode = `Time:        50     74     86     85
Distance:   242   1017   1691   1252`;

const listlines = unsolvedcode.split("\n");

let courses = [];
let total = 1;

let rawtimes = [...listlines[0].matchAll(/(\d+)/g)];
let rawdistances = [...listlines[1].matchAll(/(\d+)/g)];

rawtimes.forEach((time, index) => {
    courses.push(Array(Number(time[0]), Number(rawdistances[index][0])));
});

courses.forEach(course => {
    let counter = 0;
    let time = course[0];
    for(let i = 1; i < time; i++){
        let distance = i * (time - i);
        if(distance > course[1]) counter++;
    }

    total *= counter;
});

console.log(total);
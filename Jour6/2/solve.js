const unsolvedcode = `Time:        50     74     86     85
Distance:   242   1017   1691   1252`;

const listlines = unsolvedcode.split("\n");

let time = "";
let distance = "";
let total = 0;

let rawtimes = [...listlines[0].matchAll(/(\d+)/g)];
let rawdistances = [...listlines[1].matchAll(/(\d+)/g)];

rawtimes.forEach((tmptime, index) => {
    time += tmptime[0];
    distance += rawdistances[index][0];
});

time = Number(time);
distance = Number(distance);

for(let i = 1; i < time; i++){
    let tmpdistance = i * (time - i);
    if(tmpdistance > distance) total++;
}

console.log(total);

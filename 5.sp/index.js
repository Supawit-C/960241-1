const num_of_group_member = 3;

const students = [
    "682110159",
    "682110162",
    "682110163",
    "682110165",
    "682110167",
    "682110169",
    "682110171",
    "682110172",
    "682110174",
    "682110176",
    "682110177",
    "682110178",
    "682110180",
    "682110184",
    "682110185",
    "682110187",
    "682110196",
    "682110198",
    "682110199"
];

const group_student = {};
const random_students = [];

console.log(students.length);

while (students.length > 0) {
    const random_index = Math.floor(Math.random() * students.length);
    random_students.push(students.splice(random_index, 1)[0]);
}

const max_group = Math.floor(random_students.length / num_of_group_member);
console.log(max_group);

const remainder = random_students.length % num_of_group_member;
console.log(remainder);

for (let g = 0; g < max_group; g++) {
    group_student[g] = [];
    for (let j = 0; j < num_of_group_member; j++) {
        group_student[g].push(random_students[g * num_of_group_member + j]);
    }
}

const leftover_start = max_group * num_of_group_member;
for (let r = 0; r < remainder; r++) {
    group_student[r].push(random_students[leftover_start + r]);
}

console.log(group_student);
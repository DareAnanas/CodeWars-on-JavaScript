function teknonymize(familyTree){
    if (familyTree.children.length == 0) return;
}

let a = {
    sex: 'f',
    teknonym: '',
    children: [],
    name: 'h',
    dateOfBirth: '1047-02-01T00:00:00.000Z'
}

let b = {
    sex: 'm',
    teknonym: '',
    children: [
        {
            sex: 'f',
            teknonym: '',
            children: [],
            name: 'e',
            dateOfBirth: '1043-12-01T00:00:00.000Z'
        },
        {
            sex: 'f',
            teknonym: '',
            children: [],
            name: 'f',
            dateOfBirth: '1045-02-01T00:00:00.000Z'
        },
        {
            sex: 'm',
            teknonym: '',
            children: [],
            name: 'g',
            dateOfBirth: '1046-02-01T00:00:00.000Z'
        }
    ],
    name: 'd',
    dateOfBirth: '1023-12-28T00:00:00.000Z'
}

teknonymize(a);
console.log(a);
teknonymize(b);
console.log(b);
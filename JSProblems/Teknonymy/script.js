let sons = {};

function isLeaf(node) {
    if (node.children.length == 0)
        return true;
    return false;
}

function findElder(children) {
    let elder = children[0];
    for (let child of children) {
        if (child.dateOfBirth < elder.dateOfBirth)
            elder = child;
    }
    return elder;
}

function getTeknonym(sex, elder) {
    let parentSex = '';
    switch (sex) {
        case 'm':
            parentSex = 'father';
            break;
        case 'f':
            parentSex = 'mother';
            break;
    }
    return `${parentSex} of ${elder.name}`;
}

function plusGeneration(sex, teknonym) {
    let parentSex = '';
    switch (sex) {
        case 'm':
            parentSex = 'father';
            break;
        case 'f':
            parentSex = 'mother';
            break;
    }
    teknonym = teknonym.replace(/father|mother/g, parentSex);
    if (/grand/g.test(teknonym)) {
        teknonym = 'great-' + teknonym;
    } else {
        teknonym = 'grand' + teknonym;
    }
    return teknonym;
}

function setTeknonym(node) {
    if (!isLeaf(node)) {
        let allLeafs = true;
        for (let child of node.children) {
            if (!isLeaf(child)) {
                allLeafs = false;
            }
        }
        if (allLeafs) {
            let elder = findElder(node.children);
            sons[elder.name] = elder.dateOfBirth;
            node.teknonym = getTeknonym(node.sex, elder);
        } else {
            let elderTeknonym = '';
            for (let child of node.children) {
                setTeknonym(child);
                if (child.teknonym != '' && elderTeknonym == '') {
                    elderTeknonym = child.teknonym;
                }
                if (child.teknonym != '' && elderTeknonym != '') {
                    let elderDate = sons[elderTeknonym.at(-1)];
                    let childDate = sons[child.teknonym.at(-1)];
                    if (childDate < elderDate)
                        elderTeknonym = child.teknonym;
                }
            }
            node.teknonym = plusGeneration(node.sex, elderTeknonym);
        }
    }
}

function teknonymize(familyTree){
    if (isLeaf(familyTree)) return;
    setTeknonym(familyTree);
    console.log(sons);
    sons = [];
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

let c = {
    'sex': 'm',
    'teknonym': '',
    'children': [
        {
            'sex': 'f',
            'teknonym': '',
            'children': [
                {
                    'sex': 'f',
                    'teknonym': '',
                    'children': [],
                    'name': 'h',
                    'dateOfBirth': '1047-02-01T00:00:00.000Z'
                }
            ],
            'name': 'b',
            'dateOfBirth': '1020-02-01T00:00:00.000Z'
        },
        {
            'sex': 'm',
            'teknonym': '',
            'children': [],
            'name': 'c',
            'dateOfBirth': '1021-03-01T00:00:00.000Z'
        },
        {
            'sex': 'm',
            'teknonym': '',
            'children': [
                {
                    'sex': 'f',
                    'teknonym': '',
                    'children': [],
                    'name': 'e',
                    'dateOfBirth': '1043-12-01T00:00:00.000Z'
                },
                {
                    'sex': 'f',
                    'teknonym': '',
                    'children': [],
                    'name': 'f',
                    'dateOfBirth': '1045-02-01T00:00:00.000Z'
                },
                {
                    'sex': 'm',
                    'teknonym': '',
                    'children': [],
                    'name': 'g',
                    'dateOfBirth': '1046-02-01T00:00:00.000Z'
                }
            ],
            'name': 'd',
            'dateOfBirth': '1023-12-28T00:00:00.000Z'
        }
    ],
    'name': 'a',
    'dateOfBirth': '1000-02-01T00:00:00.000Z'
}

let d = {"name":"mvfrzdcs","teknonym":"","dateOfBirth":"1000-01-02T13:10:11.606Z","sex":"f","children":[{"name":"kgywpkot","teknonym":"","dateOfBirth":"1022-06-28T10:21:06.000Z","sex":"f","children":[{"name":"ilflwyir","teknonym":"","dateOfBirth":"1045-06-23T10:21:07.000Z","sex":"m","children":[{"name":"tvrpdfsd","teknonym":"","dateOfBirth":"1066-11-13T10:21:07.000Z","sex":"m","children":[{"name":"jvcdragd","teknonym":"","dateOfBirth":"1089-12-15T10:21:07.000Z","sex":"f","children":[]},{"name":"njnlgrzc","teknonym":"","dateOfBirth":"1095-05-10T10:21:07.000Z","sex":"m","children":[]}]}]},{"name":"ocwgsfgd","teknonym":"","dateOfBirth":"1052-03-19T10:21:07.000Z","sex":"m","children":[{"name":"jiozcugk","teknonym":"","dateOfBirth":"1073-09-28T10:21:07.000Z","sex":"m","children":[{"name":"shdeyher","teknonym":"","dateOfBirth":"1102-03-17T10:21:07.000Z","sex":"f","children":[]},{"name":"lahsvmql","teknonym":"","dateOfBirth":"1102-04-11T10:21:07.000Z","sex":"f","children":[]}]},{"name":"ejbxwhta","teknonym":"","dateOfBirth":"1075-12-18T10:21:08.000Z","sex":"m","children":[{"name":"wwlrqwst","teknonym":"","dateOfBirth":"1096-08-14T10:21:08.000Z","sex":"m","children":[]}]}]}]},{"name":"ievdpjvu","teknonym":"","dateOfBirth":"1024-05-16T10:21:08.000Z","sex":"m","children":[{"name":"wqgoylzr","teknonym":"","dateOfBirth":"1049-06-04T10:21:08.000Z","sex":"m","children":[]}]}]}

let dExpected = {"name":"mvfrzdcs","teknonym":"great-great-grandmother of jvcdragd","dateOfBirth":"1000-01-02T13:10:11.606Z","sex":"f","children":[{"name":"kgywpkot","teknonym":"great-grandmother of jvcdragd","dateOfBirth":"1022-06-28T10:21:06.000Z","sex":"f","children":[{"name":"ilflwyir","teknonym":"grandfather of jvcdragd","dateOfBirth":"1045-06-23T10:21:07.000Z","sex":"m","children":[{"name":"tvrpdfsd","teknonym":"father of jvcdragd","dateOfBirth":"1066-11-13T10:21:07.000Z","sex":"m","children":[{"name":"jvcdragd","teknonym":"","dateOfBirth":"1089-12-15T10:21:07.000Z","sex":"f","children":[]},{"name":"njnlgrzc","teknonym":"","dateOfBirth":"1095-05-10T10:21:07.000Z","sex":"m","children":[]}]}]},{"name":"ocwgsfgd","teknonym":"grandfather of wwlrqwst","dateOfBirth":"1052-03-19T10:21:07.000Z","sex":"m","children":[{"name":"jiozcugk","teknonym":"father of shdeyher","dateOfBirth":"1073-09-28T10:21:07.000Z","sex":"m","children":[{"name":"shdeyher","teknonym":"","dateOfBirth":"1102-03-17T10:21:07.000Z","sex":"f","children":[]},{"name":"lahsvmql","teknonym":"","dateOfBirth":"1102-04-11T10:21:07.000Z","sex":"f","children":[]}]},{"name":"ejbxwhta","teknonym":"father of wwlrqwst","dateOfBirth":"1075-12-18T10:21:08.000Z","sex":"m","children":[{"name":"wwlrqwst","teknonym":"","dateOfBirth":"1096-08-14T10:21:08.000Z","sex":"m","children":[]}]}]}]},{"name":"ievdpjvu","teknonym":"father of wqgoylzr","dateOfBirth":"1024-05-16T10:21:08.000Z","sex":"m","children":[{"name":"wqgoylzr","teknonym":"","dateOfBirth":"1049-06-04T10:21:08.000Z","sex":"m","children":[]}]}]};

teknonymize(a);
console.log(a);
teknonymize(b);
console.log(b);
teknonymize(c);
console.log(c);
// teknonymize(d);
// console.log(d);
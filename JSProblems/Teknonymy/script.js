let sons = {};

function isLeaf(node) {
    if (node.children.length == 0)
        return true;
    return false;
}

function findElder(children) {
    let elder = children[0];
    for (let child of children) {
        if (new Date(child.dateOfBirth) < new Date(elder.dateOfBirth))
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
                    if (new Date(childDate) < new Date(elderDate))
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
    // console.log(sons);
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

let d = {"name":"sawlhrky","teknonym":"","dateOfBirth":"1000-01-06T09:22:27.836Z","sex":"f","children":[{"name":"ionoxwrg","teknonym":"","dateOfBirth":"1029-10-26T22:40:56.000Z","sex":"m","children":[]},{"name":"rzpxhhuo","teknonym":"","dateOfBirth":"1023-10-26T22:40:56.000Z","sex":"f","children":[{"name":"fsdwknqq","teknonym":"","dateOfBirth":"1047-02-17T22:40:56.000Z","sex":"m","children":[{"name":"gsxsopsy","teknonym":"","dateOfBirth":"1077-10-06T22:40:56.000Z","sex":"f","children":[]}]},{"name":"weqryurd","teknonym":"","dateOfBirth":"1046-08-06T22:40:56.000Z","sex":"f","children":[{"name":"wdmhlxkw","teknonym":"","dateOfBirth":"1073-04-19T22:40:57.000Z","sex":"m","children":[]},{"name":"vbdsstvm","teknonym":"","dateOfBirth":"1074-03-20T22:40:57.000Z","sex":"m","children":[{"name":"nivcmjjw","teknonym":"","dateOfBirth":"1094-11-06T22:40:57.000Z","sex":"m","children":[]},{"name":"ozeisodz","teknonym":"","dateOfBirth":"1095-08-17T22:40:57.000Z","sex":"f","children":[]}]}]}]}]}
console.log(d);


teknonymize(a);
console.log(a);
teknonymize(b);
console.log(b);
teknonymize(c);
console.log(c);
teknonymize(d);
console.log(d);
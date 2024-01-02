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
    return `${parentSex} of ${elder.name};${elder.dateOfBirth}`;
}

function ageCompareTeknonyms(a, b) {
    a = a.slice(a.indexOf(';')+1);
    b = b.slice(b.indexOf(';')+1);
    return a < b;
}

function teknonymTrimDate(teknonym) {
    let index = teknonym.indexOf(';');
    if (index == -1) return teknonym;
    return teknonym.slice(0, index);
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

function setTeknonym2(node) {
    if (!isLeaf(node)) {
        let allLeafs = true;
        for (let child of node.children) {
            if (!isLeaf(child)) {
                allLeafs = false;
            }
        }
        if (allLeafs) {
            let elder = findElder(node.children);
            node.teknonym = getTeknonym(node.sex, elder);
        } else {
            let elderTeknonym = '';
            for (let child of node.children) {
                setTeknonym2(child);
                if (elderTeknonym != '' && child.teknonym != '' &&
                ageCompareTeknonyms(child.teknonym, elderTeknonym)) {
                    elderTeknonym = child.teknonym;
                    child.teknonym = teknonymTrimDate(child.teknonym);
                } else if (elderTeknonym == '' && child.teknonym != '') {
                    elderTeknonym = child.teknonym;
                    child.teknonym = teknonymTrimDate(child.teknonym);
                }
            }
            elderTeknonym = teknonymTrimDate(elderTeknonym);
            node.teknonym = plusGeneration(node.sex, elderTeknonym);
        }
    }
}

function setTeknonym1(node) {
    if (!isLeaf(node)) {
        let allLeafs = true;
        for (let child of node.children) {
            if (!isLeaf(child)) {
                allLeafs = false;
            }
        }
        if (allLeafs) {
            let elder = findElder(node.children);
            node.teknonym = getTeknonym(node.sex, elder);
        } else {
            let elderTeknonym = '';
            for (let child of node.children) {
                setTeknonym2(child);
                if (elderTeknonym != '' && child.teknonym != '' &&
                ageCompareTeknonyms(child.teknonym, elderTeknonym)) {
                    elderTeknonym = child.teknonym;
                    child.teknonym = teknonymTrimDate(child.teknonym);
                } else if (elderTeknonym == '' && child.teknonym != '') {
                    elderTeknonym = child.teknonym;
                    child.teknonym = teknonymTrimDate(child.teknonym);
                }
            }
            elderTeknonym = teknonymTrimDate(elderTeknonym);
            node.teknonym = plusGeneration(node.sex, elderTeknonym);
        }
    }
}

function teknonymize(familyTree){
    if (isLeaf(familyTree)) return;
    setTeknonym1(familyTree);
    familyTree.teknonym = teknonymTrimDate(familyTree.teknonym);
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

teknonymize(a);
console.log(a);
teknonymize(b);
console.log(b);
teknonymize(c);
console.log(c);
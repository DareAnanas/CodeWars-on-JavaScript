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

function teknonymTrimDate(teknonym) {
    let index = teknonym.indexOf(';');
    if (index == -1) return teknonym;
    return teknonym.slice(0, index);
}

function ageCompareTeknonyms(a, b) {
    a = a.slice(a.indexOf(';')+1);
    b = b.slice(b.indexOf(';')+1);
    return a < b;
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
            node.teknonym = teknonymTrimDate(getTeknonym(node.sex, elder));
        } else {
            let elderTeknonym = '';
            for (let child of node.children) {
                setTeknonym(child);
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
    setTeknonym(familyTree);
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

let d = {
    "name": "kmysxoex",
    "teknonym": "",
    "dateOfBirth": "1000-01-02T10:49:42.352Z",
    "sex": "f",
    "children": [
        {
            "name": "cexhomfj",
            "teknonym": "",
            "dateOfBirth": "1021-12-22T01:47:52.000Z",
            "sex": "f",
            "children": []
        },
        {
            "name": "yjvscrfi",
            "teknonym": "",
            "dateOfBirth": "1022-03-22T01:47:53.000Z",
            "sex": "f",
            "children": []
        },
        {
            "name": "imxpdlrc",
            "teknonym": "",
            "dateOfBirth": "1029-12-17T01:47:53.000Z",
            "sex": "f",
            "children": [
                {
                    "name": "jsfldtrz",
                    "teknonym": "",
                    "dateOfBirth": "1052-08-17T01:47:53.000Z",
                    "sex": "f",
                    "children": []
                },
                {
                    "name": "yqiismjr",
                    "teknonym": "",
                    "dateOfBirth": "1056-10-06T01:47:53.000Z",
                    "sex": "f",
                    "children": [
                        {
                            "name": "qghanxyt",
                            "teknonym": "",
                            "dateOfBirth": "1079-01-18T01:47:53.000Z",
                            "sex": "f",
                            "children": []
                        },
                        {
                            "name": "jwauqxgw",
                            "teknonym": "",
                            "dateOfBirth": "1079-12-23T01:47:53.000Z",
                            "sex": "f",
                            "children": [
                                {
                                    "name": "dtnrifge",
                                    "teknonym": "",
                                    "dateOfBirth": "1103-07-27T01:47:53.000Z",
                                    "sex": "m",
                                    "children": []
                                },
                                {
                                    "name": "qoqzkvlo",
                                    "teknonym": "",
                                    "dateOfBirth": "1105-01-26T01:47:53.000Z",
                                    "sex": "m",
                                    "children": [
                                        {
                                            "name": "jrpebuvx",
                                            "teknonym": "",
                                            "dateOfBirth": "1128-10-20T01:47:53.000Z",
                                            "sex": "m",
                                            "children": []
                                        },
                                        {
                                            "name": "czebbkmh",
                                            "teknonym": "",
                                            "dateOfBirth": "1126-11-27T01:47:53.000Z",
                                            "sex": "f",
                                            "children": [
                                                {
                                                    "name": "fgohicoh",
                                                    "teknonym": "",
                                                    "dateOfBirth": "1153-08-16T01:47:53.000Z",
                                                    "sex": "f",
                                                    "children": []
                                                },
                                                {
                                                    "name": "hdkmsyxe",
                                                    "teknonym": "",
                                                    "dateOfBirth": "1156-11-14T01:47:53.000Z",
                                                    "sex": "f",
                                                    "children": []
                                                },
                                                {
                                                    "name": "rgjfuool",
                                                    "teknonym": "",
                                                    "dateOfBirth": "1149-01-07T01:47:55.000Z",
                                                    "sex": "m",
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "lmnwooqi",
                                    "teknonym": "",
                                    "dateOfBirth": "1109-01-27T01:47:55.000Z",
                                    "sex": "m",
                                    "children": [
                                        {
                                            "name": "yxbpuaxo",
                                            "teknonym": "",
                                            "dateOfBirth": "1134-06-25T01:47:55.000Z",
                                            "sex": "f",
                                            "children": []
                                        },
                                        {
                                            "name": "pycpxdsv",
                                            "teknonym": "",
                                            "dateOfBirth": "1132-01-20T01:47:55.000Z",
                                            "sex": "f",
                                            "children": []
                                        },
                                        {
                                            "name": "rgrormht",
                                            "teknonym": "",
                                            "dateOfBirth": "1133-01-06T01:47:55.000Z",
                                            "sex": "f",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "yreknqxm",
                    "teknonym": "",
                    "dateOfBirth": "1056-03-20T01:47:55.000Z",
                    "sex": "m",
                    "children": []
                }
            ]
        }
    ]
}

teknonymize(a);
console.log(a);
teknonymize(b);
console.log(b);
teknonymize(c);
console.log(c);
// teknonymize(d);
// console.log(d);

console.log({"name":"eozeyxuz","teknonym":"great-grandmother of enucmkfk","dateOfBirth":"1000-01-02T11:01:53.648Z","sex":"f","children":[{"name":"ctuvzuut","teknonym":"","dateOfBirth":"1020-07-12T02:03:48.000Z","sex":"f","children":[]},{"name":"vxunuctr","teknonym":"grandmother of enucmkfk","dateOfBirth":"1026-04-15T02:03:48.000Z","sex":"f","children":[{"name":"ggyvfkhu","teknonym":"mother of enucmkfk","dateOfBirth":"1054-03-15T02:03:48.000Z","sex":"f","children":[{"name":"enucmkfk","teknonym":"","dateOfBirth":"1076-08-05T02:03:48.000Z","sex":"m","children":[]}]},{"name":"hjvmetlz","teknonym":"grandmother of mrnngaer","dateOfBirth":"1055-06-20T02:03:48.000Z","sex":"f","children":[{"name":"jexobnit","teknonym":"","dateOfBirth":"1078-08-04T02:03:48.000Z","sex":"f","children":[]},{"name":"ypebhonu","teknonym":"father of mrnngaer","dateOfBirth":"1077-06-09T02:03:49.000Z","sex":"m","children":[{"name":"gvwuehrn","teknonym":"","dateOfBirth":"1104-10-05T02:03:49.000Z","sex":"m","children":[]},{"name":"mrnngaer","teknonym":"","dateOfBirth":"1099-03-28T02:03:50.000Z","sex":"f","children":[]}]}]}]}]});
console.log({"name":"eozeyxuz","teknonym":"great-great-grandmother of mrnngaer","dateOfBirth":"1000-01-02T11:01:53.648Z","sex":"f","children":[{"name":"ctuvzuut","teknonym":"","dateOfBirth":"1020-07-12T02:03:48.000Z","sex":"f","children":[]},{"name":"vxunuctr","teknonym":"great-grandmother of mrnngaer","dateOfBirth":"1026-04-15T02:03:48.000Z","sex":"f","children":[{"name":"ggyvfkhu","teknonym":"mother of enucmkfk","dateOfBirth":"1054-03-15T02:03:48.000Z","sex":"f","children":[{"name":"enucmkfk","teknonym":"","dateOfBirth":"1076-08-05T02:03:48.000Z","sex":"m","children":[]}]},{"name":"hjvmetlz","teknonym":"grandmother of mrnngaer","dateOfBirth":"1055-06-20T02:03:48.000Z","sex":"f","children":[{"name":"jexobnit","teknonym":"","dateOfBirth":"1078-08-04T02:03:48.000Z","sex":"f","children":[]},{"name":"ypebhonu","teknonym":"father of mrnngaer","dateOfBirth":"1077-06-09T02:03:49.000Z","sex":"m","children":[{"name":"gvwuehrn","teknonym":"","dateOfBirth":"1104-10-05T02:03:49.000Z","sex":"m","children":[]},{"name":"mrnngaer","teknonym":"","dateOfBirth":"1099-03-28T02:03:50.000Z","sex":"f","children":[]}]}]}]}]});
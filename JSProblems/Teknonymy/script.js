// function breadthFirstTraversal(root) {
//     if (!root) {
//         return [];
//     }

//     let result = [];
//     let queue = [root];

//     while (queue.length > 0) {
//         let currentNode = queue.shift();
//         console.log(currentNode);
//         result.push(currentNode.name);
//         queue.push(...currentNode.children);
//     }

//     return result;
// }

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
    switch (sex) {
        case 'm':
            return `father of ${elder.name}`;
        case 'f':
            return `mother of ${elder.name}`;
    }
}

function teknonymize(familyTree){
    if (isLeaf(familyTree)) return;
    if (!isLeaf(familyTree)) {
        let allLeafs = true;
        for (let node of familyTree.children) {
            if (!isLeaf(node)) {
                allLeafs = false;
            }
        }
        if (allLeafs) {
            let elder = findElder(familyTree.children);
            familyTree.teknonym = getTeknonym(familyTree.sex, elder);
        }
    }
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
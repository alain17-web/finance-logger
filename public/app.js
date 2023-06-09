import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplates.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
const docTwo = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
const docThree = {
    uid: 2,
    resourceName: 'guy',
    data: { name: 'luigi' }
};
const docFour = {
    uid: 3,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'milk']
};
//console.log(docThree,docFour);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 4,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docSix = {
    uid: 5,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
//console.log(docFive, docSix);
//TUPLES 
let arr = ['ryu', 25, true];
//As long as the array contains the 3 types, the types don't have to appear in a particular order
arr = [30, false, 'yoshi'];
//but with tuples, the order matters
let tup = ['ryu', 25, true];
//example of usage of tuples:
let student;
student = ['chun-li', 22345];

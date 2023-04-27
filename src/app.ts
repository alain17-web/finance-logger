import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { HasFormatter } from './interfaces/HasFormatter.js';



const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e: Event) => {
    e.preventDefault();

    let values: [string,string,number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
});

//GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 40});
//console.log(docOne.age);

//with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docTwo: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
}

const docThree: Resource<object> = {
    uid: 2,
    resourceName: 'guy',
    data: {name: 'luigi'}
}

const docFour: Resource<string[]> = {
    uid: 3,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'milk']
}

//console.log(docThree,docFour);

//ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface ResourceN<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docFive: ResourceN<object> = {
    uid: 4,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind'}
}

const docSix: ResourceN<object> = {
    uid: 5,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi'}
}

//console.log(docFive, docSix);

//TUPLES 

let arr = ['ryu',25,true];
//As long as the array contains the 3 types, the types don't have to appear in a particular order
arr = [30, false,'yoshi']

//but with tuples, the order matters
let tup: [string, number, boolean] = ['ryu',25,true];

//example of usage of tuples:
let student: [string, number];
student = ['chun-li', 22345];
import { join } from 'lodash-es';

export function printMe() {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`DEBUG MODE: ${process.env}`);
    }
    let a = {a:1,b:2};
    let c = {...a,d:3};
    let f = a => console.log(a);
    f("123");
    debugger;
    console.log(JSON.stringify(c));
    alert(join(['I get called', 'from print.js!'], " "));
}

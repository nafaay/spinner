
// with setTimeout we print the charcters | / - \ each one after a certain time 
// with \r to return to the initial place with the cursor
// and this operation is repeated once and make the feeling like the cursor is spinning  
let delay = 0
delay = 50;
setTimeout(() => {
    process.stdout.write('\r|   ');
}, delay);
delay = 500;
setTimeout(() => {
    process.stdout.write('\r/   ');
}, delay);
delay = 700;

setTimeout(() => {
    process.stdout.write('\r-   ');
}, delay);
delay = 900;
setTimeout(() => {
    process.stdout.write('\r\\   ');    
}, delay);
delay = 1100;
setTimeout(() => {
    process.stdout.write('\r|   ');
}, delay);
delay = 1300;
setTimeout(() => {
    process.stdout.write('\r/   ');
}, delay);
delay = 1500;

setTimeout(() => {
    process.stdout.write('\r-   ');
}, delay);
delay = 1700;
setTimeout(() => {
    process.stdout.write('\r\\   ');    
}, delay);
delay = 1900;
setTimeout(() => {
    process.stdout.write('\r|   ');
}, delay);

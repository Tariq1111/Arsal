// ******************** var keyword *******************//

// It can be updated and also can be redcleared 


// Code 

// var course = "Zero To Hero";
// console.log(window.course);
// course = "Zero to hero in LWC";
// console.log(window.course);

// Scope
// It can be global scope and function scope
// can not be block scope



/*  Checking Function Scope in var -------- function scope "Yes" we cannot access it outside of the fuction it shows error */

// function CheckScope(){
//     var course = "Zero to hero";
//     console.log(course);
// }

// CheckScope();
// console.log(course);


/* Checking  Block level Scope in var keywords   ------- Block Scope "NO" we can access it outside of the block*/ 
// if(2===2){
//     var course = "Zero To Hero";
//     console.log(course);
// }

// console.log(course);









// ************** let keywords ********** //
// It can be updated but also cannot be re-decleared 

// let course = "zero to hero";
// console.log(course);
// course = "Zer to hero in lwc";   // let course = "Zer to hero in lwc"; it shows error if we re-declear
// console.log(course);



// it can be fuction and block scope is valid
// global scope is not valid

// let course = "hero to zero";    // result is undefined global scope is not valid
// console.log(window.course);


// function CheckScopeLet(){
//     let course = "Zero to hero";
//     console.log(course);
// }
// CheckScopeLet();
// console.log(course);


// if(2===2){
//     let course = "Zero to Hero";
//     console.log(course);
// }
// console.log(course);          // It show error to access or display outside of the function scopr




/****************    const keyword    ********************* */
const course = "Zero to hero";
course = "Asif bhai";                   // we cannot re assign and we cannot re  decleared in const
console.log(course);

// it can supported block and function scope both
// It cannot be supported glovbal

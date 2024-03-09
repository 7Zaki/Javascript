//There are two types of array

//continous/packed and holey

//Array optimization
//Theae three types of array can be in both continous and holey type array
//SMI (small integer)
//packed element
//Double (float, string, function)


const arrTwo = [1,2,3,4]
//PACKED_SMI_ELEMENTS is highly optimized array but it is very restrictive means you can take only 
//numbers not even decimal

//const arrTwo = [1,2,,4]
//HOLEY_SMI_ELEMENTS

arrTwo.push(6.0)
//PACKED_DOUBLE_SMI_ELEMENTS


arrTwo.push('9')
//PACKED_ELEMENTS

//Once you add a packed SMI downgrades to packed double it can never go back to packed smi 
//even if delete the "6.0"

arrTwo[10] = 12
//HOLEY_ELEMENTS because it ha sSMI, doubles, string and holes


console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);  //this is very costly operation because it involves lot of steps
console.log(arrTwo[19]);

//bound check
//hasOwnProperty(arrTwo, 9) //it will check in the prototype
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10) 

//hasOwn property is the most expensive operations
//holes are very expensive in JS


const arrThree = [1,2,3,4,5]
console.log(arrThree[8]);


//SMI > DOUBLE > PACKED Optimization level
//H_SMI > H_DOUBLE > H_PACKED Optimization level
//once it downgrades it can never upgrades

const arrFour = new Array(3)
//just three holes and allocated to H_SMI_Elements because compiler tries to keep it highly optimized
arrFour[0] = '1'    //it downgrades to HOLEY_PACKED ELEMENTS
arrFour[1] = '2'
arrFour[2] = '3'  

console.log(arrFour);

const arrFive = [] //it is allocated to SMI the most optimized version
console.log(arrFive);
arrFive.push('1')
arrFive.push('2')
arrFive.push('3')  //HOLEY_PACKED_ELEMENTS

const arrSix = [1,2,3,4,5,6]
console.log(NaN);  //packed_double
console.log(Infinity);  //packed_double


//for, for-of, forEach
//prefer inbuilt methods. these are optimized







// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log('5 is best');
    }
    //console.log(element);                   //ctrl + shift + L to select all same variables and change it
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value is ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value is ${j} and inner loop is ${i}`);
        //console.log(`${i} * ${j} = ${i}*${j}`);
        
    }
}


let myArray = ["flash", "batman", "superman"]
for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }

    console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }

    console.log(`value of i is ${index}`);
    
}









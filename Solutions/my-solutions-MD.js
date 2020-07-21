// 1. identity function.

const identity = x => x;

// 2 .subb function.

const subb = (a, b) =>{
    // Check whether arguments are of type number.
    if(typeof a !== 'number' && typeof b !== 'number') {
        // alert('please enter two integers as arguments to the function.')
        console.log('please enter two integers as arguments to the function.')
        // If args are of type number then perform calculation
    } else {
        return a - b;
    }
};

// 3. mulb function.

const mulb = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        // do nothing.
    }
};
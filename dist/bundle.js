const str = "this is a string variable.";


const runFn = (str) => {
    setTimeout(() => {
        console.log('str: ' +　str);
        throw new Error('this is async error');
    }, 2e3);
};


runFn(str);
//# sourceMappingURL=bundle.js.map

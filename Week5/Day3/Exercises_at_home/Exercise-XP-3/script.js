const p = Promise.resolve(3);

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        p.then(value => console.log(value));
    }, 1000);
});

p1.then(values => {
    console.log(values);
});

const r = Promise.reject(('Boo!'));
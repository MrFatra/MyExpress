var str = 'styles/style.css';

if (str.includes('/')) {
    console.log('ada');
} else {
    console.log('tidak ada');
}

var stringBaru = str.substring(str.indexOf('/') + 1);
console.log("./" + stringBaru);
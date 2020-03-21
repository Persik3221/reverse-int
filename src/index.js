module.exports = function reverse (n) {
    return (n<0) ? Number((n*(-1)+'').split('').reverse().join('')) : Number((n+'').split('').reverse().join(''));
}


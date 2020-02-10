const {sum, prod, devide} = require('./sketch');

test('adds 1 + 2 to equal 3', ()=>{
	expect(sum(1, 2)).toBe(3);
});

test('3 times 4 equals to 12',()=>{
	expect(prod(3*4)).toBe(12);
})

test('12/3 equals to 4', ()=>{
	expect(devide(12,3)).toBe(4);
})
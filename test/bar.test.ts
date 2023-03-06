import bar from '../src/bar';

describe('testing bar method', ()=>{
  test('bar does a subtraction', ()=> {
    expect(bar(2, 1)).toBe(1)
  })
})

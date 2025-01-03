import {Calculator} from './test'
describe('test',() =>
{
  it('should add 2 numbers', () => {
    const service  = new Calculator();
    expect(service.subtract(2,2)).toBe(0);
  });
})

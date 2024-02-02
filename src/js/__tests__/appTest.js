import { orderByProps } from '../app';

test('function test for creating an array for cards', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
  const resultingArray = [     
    {key: 'name', value: 'мечник'},
    {key: 'level', value: 2},
    {key: 'attack', value: 80},
    {key: 'defence', value: 40},
    {key: 'health', value: 10}      
  ];
  
  const result = orderByProps(obj, ["name", "level"]);

  expect(result).toEqual(resultingArray);
});

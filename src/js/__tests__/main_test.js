import Satting from "../main"

test('test', () => {
  const satt = new Satting
  satt.changeSetting(['difficulty', 'hard'])
  expect(satt).toBeDefined()
})

test.each(
  [
    ['theme gray', 'theme', 'gray', 'gray'],
    ['theme light', 'theme', 'light', 'light'],
    ['theme dark', 'theme', 'dark', 'dark'],
    ['music trance', 'music', 'trance', 'trance'],
    ['music pop', 'music', 'pop', 'pop'],
    ['music rock', 'music', 'rock', 'rock'],
    ['music chillout', 'music', 'chillout', 'chillout'],
    ['music off', 'music', 'off', 'off'],
    ['difficulty easy', 'difficulty', 'easy', 'easy'],
    ['difficulty normal', 'difficulty', 'normal', 'normal'],
    ['difficulty hard', 'difficulty', 'hard', 'hard'],
    ['difficulty nightmare', 'difficulty', 'nightmare', 'nightmare'],
]
)(('Описание^ %s'), (name, param, data, expected) => {
  const satt = new Satting
  try{
    satt.changeSetting([param, data])
    expect(satt.setting.get(param)).toBe(expected)
  }
  catch (err) {
    expect.toThrow(Error)
  }
})

test('test error', () => {
  const satt = new Satting
  expect(() => satt.changeSetting(['music', 'hard'])).toThrow(Error)
  
})
test('test error theme', () => {
  const satt = new Satting
  expect(() => satt.changeSetting(['theme', 'hard'])).toThrow(Error)
  
})
test('test error difficulty', () => {
  const satt = new Satting
  expect(() => satt.changeSetting(['difficulty', 'off'])).toThrow(Error)
  
})
test('test getter', () => {
  const satt = new Satting
  console.log(satt.getSettings);
  expect(satt.getSettings).toBeTruthy()
  expect(satt.getSettings).toBeInstanceOf(Map)
  
})

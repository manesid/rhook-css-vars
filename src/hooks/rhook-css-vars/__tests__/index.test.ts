import { renderHook } from '@testing-library/react-hooks';
import { Themer } from '../index';

//   const differentTheme = {
//     variableOne: 'blue',
//     variableThree: 'hotpink',
//   };

test('Themer', () => {
  const basicTheme = {
    variableOne: 'red',
    variableTwo: 'white',
  };
  const { result } = renderHook(() => Themer({ theme: basicTheme }));

  expect(result.current).toBe('demo');
});

// describe('Button component', () => {
//   test('Matches the snapshot', () => {
//     const button = create(<Themer />);
//     expect(button.toJSON()).toMatchSnapshot();
//   });
// });

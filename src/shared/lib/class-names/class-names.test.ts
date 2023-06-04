import { classNames } from './class-names';

describe('className', () => {
  test('with only first param', () => {
    expect(classNames('someClass'))
      .toBe('someClass');
  });

  test('with additionalClass', () => {
    expect(classNames(
      'someClass',
      {},
      ['additionalClass1', 'additionalClass2'],
    ))
      .toBe('someClass additionalClass1 additionalClass2');
  });

  test('with mods', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['additionalClass1', 'additionalClass2'],
    ))
      .toBe('someClass additionalClass1 additionalClass2 hovered scrollable');
  });

  test('with mods false', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['additionalClass1', 'additionalClass2'],
    ))
      .toBe('someClass additionalClass1 additionalClass2 hovered');
  });

  test('with mods undefined', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['additionalClass1', 'additionalClass2'],
    ))
      .toBe('someClass additionalClass1 additionalClass2 hovered');
  });
});

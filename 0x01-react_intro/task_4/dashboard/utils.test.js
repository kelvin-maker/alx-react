import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  it('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });

  it('getFooterCopy returns the correct string based on argument', () => {
    expect(getFooterCopy(false)).toEqual('All rights reserved');
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('getLatestNotification returns the correct string', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

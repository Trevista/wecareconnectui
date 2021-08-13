import { GetNameFromUrlPipe } from './get-name-from-url.pipe';

describe('GetNameFromUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new GetNameFromUrlPipe();
    expect(pipe).toBeTruthy();
  });
});

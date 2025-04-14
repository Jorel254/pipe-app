import { HeroCreatorPipePipe } from './hero-creator-pipe.pipe';

describe('HeroCreatorPipePipe', () => {
  it('create an instance', () => {
    const pipe = new HeroCreatorPipePipe();
    expect(pipe).toBeTruthy();
  });
});

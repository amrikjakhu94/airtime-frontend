import { IndexpageModule } from './indexpage.module';

describe('IndexpageModule', () => {
  let indexpageModule: IndexpageModule;

  beforeEach(() => {
    indexpageModule = new IndexpageModule();
  });

  it('should create an instance', () => {
    expect(indexpageModule).toBeTruthy();
  });
});

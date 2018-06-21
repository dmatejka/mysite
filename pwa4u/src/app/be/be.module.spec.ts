import { BEModule } from './be.module';

describe('BEModule', () => {
  let bEModule: BEModule;

  beforeEach(() => {
    bEModule = new BEModule();
  });

  it('should create an instance', () => {
    expect(bEModule).toBeTruthy();
  });
});

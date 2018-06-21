import { SLModule } from './sl.module';

describe('SLModule', () => {
  let sLModule: SLModule;

  beforeEach(() => {
    sLModule = new SLModule();
  });

  it('should create an instance', () => {
    expect(sLModule).toBeTruthy();
  });
});

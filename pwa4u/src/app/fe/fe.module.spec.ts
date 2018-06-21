import { FEModule } from './fe.module';

describe('FEModule', () => {
  let fEModule: FEModule;

  beforeEach(() => {
    fEModule = new FEModule();
  });

  it('should create an instance', () => {
    expect(fEModule).toBeTruthy();
  });
});

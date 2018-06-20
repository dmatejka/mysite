import { UXModule } from './ux.module';

describe('UXModule', () => {
  let uXModule: UXModule;

  beforeEach(() => {
    uXModule = new UXModule();
  });

  it('should create an instance', () => {
    expect(uXModule).toBeTruthy();
  });
});

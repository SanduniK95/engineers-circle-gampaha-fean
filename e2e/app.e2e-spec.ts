import { MaterialDashboardAngularPage } from './app.po';

describe('CSR Platform routing tests', () => {
  let page: MaterialDashboardAngularPage;

  beforeEach(() => {
    page = new MaterialDashboardAngularPage();
  });

  it('should display Engineers\' Circle Gampaha', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Engineers\' Circle Gampaha');
  });
});

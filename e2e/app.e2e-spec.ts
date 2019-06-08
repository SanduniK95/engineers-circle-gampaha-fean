import { MaterialDashboardAngularPage } from './app.po';

describe('material-dashboard-angular App', () => {
  let page: MaterialDashboardAngularPage;

  beforeEach(() => {
    page = new MaterialDashboardAngularPage();
  });

  it('should display Engineers\' Circle Gampaha', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Engineers\' Circle Gampaha');
  });
});

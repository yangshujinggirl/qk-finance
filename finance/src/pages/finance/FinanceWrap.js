import { PageHeader, Progress, Row, Col } from 'antd';

class FinanceWrap extends React.Component {
  render() {
    const routes = [
        {
          path: 'index',
          breadcrumbName: 'First-level Menu',
        },
        {
          path: 'first',
          breadcrumbName: 'Second-level Menu',
        },
        {
          path: 'second',
          breadcrumbName: 'Third-level Menu',
        },
      ];
    return(
    <PageHeader
      className="site-page-header"
      breadcrumb={{ routes }}>
      {this.props.children}
    </PageHeader>
    )
  }
}

export default FinanceWrap;

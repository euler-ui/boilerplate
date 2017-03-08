import { Pager, PageItem } from 'react-bootstrap';
var pagerInstance = (
<div>
  <Pager>
    <PageItem previous href="#">← Previous Page</PageItem>
    <PageItem next href="#">Next Page →</PageItem>
  </Pager>
  <p></p>
  <Pager>
    <PageItem previous href="#">← Previous</PageItem>
    <PageItem disabled next href="#">Next →</PageItem>
  </Pager>
</div>
);

ReactDOM.render(pagerInstance, mountNode);
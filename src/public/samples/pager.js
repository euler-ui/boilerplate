var Pager = ReactBootstrap.Pager;
var PageItem = ReactBootstrap.PageItem;
var pagerInstance = (
    <div>
        <Pager>
            <PageItem previous href="#">&larr; Previous Page</PageItem>
            <PageItem next href="#">Next Page &rarr;</PageItem>
        </Pager>
        <p></p>
        <Pager>
            <PageItem previous href="#">&larr; Previous</PageItem>
            <PageItem disabled next href="#">Next &rarr;</PageItem>
        </Pager>
    </div>
);

ReactDOM.render(pagerInstance, mountNode);
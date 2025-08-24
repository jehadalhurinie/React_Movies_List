import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';

function AdvancedExample({pageChange}) {
  const handlePageClick=(data)=>{
      pageChange(data.selected+1);


  }
  const count=500;
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next "
        onPageChange={handlePageClick}//if i click to move on another page the func is fire
        marginPagesDisplayed={2}//range of the last list
        pageRangeDisplayed={2}//the range of the first list like
        pageCount={count}//number of page on the website
        previousLabel="previous"//click of prev page
         //style:
        containerClassName={'pagination justify-content-center p-3'}//add the class of bootstrap like:pagination classname
          pageClassName={"page-item"} //class for the item 
          //the diffrence between it is :container className if for the pagination but the pageination item for every item 
          pageLinkClassName={'page-link'}//for all item link in pagination without click next or prev or ...
          //prev and next and ...
          previousClassName={'page-item'}
          nextClassName={'page-item'}
          previousLinkClassName={'page-link'} //style about links
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}//active the page number be like:blue
        />
  );
}

export default AdvancedExample;
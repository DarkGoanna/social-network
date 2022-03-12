import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.sass' 

type PaginationType = {
  totalCount: number
  countOnPage:number 
  toggleActivePage: (pageNumber:number) => void
}

const Pagination:FC<PaginationType> = ({totalCount, countOnPage, toggleActivePage}) => {
  const buttonsCount = Math.ceil(totalCount / countOnPage);

  const handlePageClick = (event:any) => {
    toggleActivePage(event.selected + 1)
  };

  return (
    <div>
      <ReactPaginate
        breakLabel='...'
        nextLabel='Вперед'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={buttonsCount}
        previousLabel='Назад'
        containerClassName={style.pagination}
        pageClassName={style.paginationButton}
        previousClassName={style.paginationButton}
        nextClassName={style.paginationButton}
        breakClassName={style.paginationButton}
        activeClassName='active'
      />
    </div>
  );
}

export default Pagination;
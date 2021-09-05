import './styles.css';

const MAX_ITEMS = 5;
const MAX_SIDE = (MAX_ITEMS - 1) / 2;

type Props = {
  pages: number;
  currentPage: number;
  setPage: Function;
}

function Pagination({
  pages,
  currentPage,
  setPage
}: Props) {
  const firstPage = Math.max(currentPage - MAX_SIDE, 1);
  
  return (
    <div className="container">
      <div className="row">
        <ul className="pagination">
          {currentPage > 1 ?
            <li
              className={`waves-effect`}
              onClick={() => setPage(currentPage - 1)}
            >
              <a href="/#">Prev</a>
            </li> :
            <li>
              <a className={`transparent`} href="/#">Prev</a>
            </li>
          }
          {
            Array.from({ length: MAX_ITEMS })
              .map((_, index) => index + firstPage)
              .map(page => (
                <li
                className={
                  page === currentPage ? 'active' : ''
                }
                  onClick={() => setPage(page)}
                >
                  <a href="/#">
                    {page}
                  </a>
                </li>
              ))
          }
          {currentPage < pages ?
            <li
              className={`waves-effect`}
              onClick={() => setPage(currentPage + 1)}
            >
              <a href="/#">Next</a>
            </li> :
            <li>
              <a className={`transparent`} href="/#">Next</a>
            </li>
          }
        </ul>
      </div>
    </div>
  );
}

export default Pagination;

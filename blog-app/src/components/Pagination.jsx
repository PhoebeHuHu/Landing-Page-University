

export const Pagination = ({ paginate, postsPerPage, currentPage, totalPosts }) => {
    const pageNumbers = [];
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map((index) => (
                        <li key={index} className="">
                            <a href="#"
                                className={`page-link ${currentPage === index ? 'active-page' : ''}`}
                                onClick={() => paginate(index)}//pass index as pageNumber to App.jsx
                            >
                                {index}
                            </a>
                        </li>
                    ))
                }

            </ul>

        </nav >
    )
}

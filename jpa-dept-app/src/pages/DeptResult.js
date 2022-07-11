import { Link } from "react-router-dom";

export const DeptResult = ({ data, page, setPage }) => {
    console.log(page);
    console.log(data);

    return (
        <div className="result">
            <h2>ALL DEPT</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>deptno </td>
                        <td>dname </td>
                        <td>loc </td>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.dtoList.map((dept) => {
                            return (
                                <tr key={dept.deptno}>
                                    <td>{dept.deptno}</td>
                                    <td>{dept.dname}</td>
                                    <td>{dept.loc}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <ul className="pagination">
                <li className="page_item">
                    <span onClick={() => setPage(page === 1 ? 1 : page - 1)}>
                        Previous
                    </span>
                </li>
                {data &&
                    data.pageList.map((page) => (
                        <li key={page} className="page_items">
                            <span
                                // key={page}
                                id={page}
                                onClick={(e) => {
                                    setPage(parseInt(e.target.id));
                                }}
                            >
                                {page}
                            </span>
                        </li>
                    ))}

                <li className="page_item">
                    <span
                        onClick={() =>
                            setPage(
                                page === data.pageList.length
                                    ? data.pageList.length
                                    : page + 1
                            )
                        }
                    >
                        Next
                    </span>
                </li>
            </ul>
        </div>
    );
};

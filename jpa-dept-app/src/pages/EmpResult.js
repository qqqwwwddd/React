import { Link } from "react-router-dom";

export const EmpResult = ({ data, page, setPage }) => {
    console.log(page);
    return (
        <div className="result">
            <h2>ALL EMP</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>empno </td>
                        <td>ename </td>
                        <td>job </td>
                        <td>mgr </td>
                        <td>hiredate </td>
                        <td>sal</td>
                        <td>comm</td>
                        <td>deptno</td>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.dtoList.map((emp) => {
                            return (
                                <tr key={emp.empno}>
                                    <td>{emp.empno}</td>
                                    <td>{emp.ename}</td>
                                    <td>{emp.job}</td>
                                    <td>{emp.mgr}</td>
                                    <td>{emp.hiredate}</td>
                                    <td>{emp.sal}</td>
                                    <td>{emp.comm}</td>
                                    <td>{emp.dept && emp.dept.deptno}</td>
                                    {/* <td>{emp.dept && emp.dept.dname}</td>
                                    <td>{emp.dept && emp.dept.loc}</td> */}
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

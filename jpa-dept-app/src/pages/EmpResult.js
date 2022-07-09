export const EmpResult = ({ data }) => {
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
                        data.map((emp) => {
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
        </div>
    );
};

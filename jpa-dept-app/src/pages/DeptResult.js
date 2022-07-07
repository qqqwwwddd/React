export const DeptResult = ({ data }) => {
    return (
        <div className="result">
            <h2>결과</h2>
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
                        data.map((dept) => {
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
        </div>
    );
};

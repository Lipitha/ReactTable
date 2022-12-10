import TableRow from "./TableRow";

function Table ({data}){
    return(
        <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Qualification</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((eachStudent) => {
            return(
            <TableRow eachStudent={eachStudent}/>
            )
          })}
        </tbody>
      </table>
    )
}
export default Table;
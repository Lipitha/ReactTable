function TableRow({ eachStudent }) {
  return (
    <tr key={eachStudent.id}>
      <td>{eachStudent.firstName}</td>
      <td>{eachStudent.lastName}</td>
      <td>{eachStudent.qualification}</td>
      <td>{eachStudent.age}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}
export default TableRow;

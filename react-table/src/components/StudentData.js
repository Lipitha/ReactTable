import data from "../mock-data/mockData.json";
import Table from "../utils/table/Table";

function StudentData() {
  return (
    <div>
      <h1>Student Data</h1>
      <Table data={data}/>
    </div>
  );
}
export default StudentData;

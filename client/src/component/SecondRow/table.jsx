import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/table.css";

export default function FileOwnerTable() {
  const [files, setFile] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const result = await axios.get("http://192.168.1.17:4000/file");
        //http://192.168.1.17:4000/file http://192.168.1.17:4000/file
        setFile(result.data);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAllData();
  }, []);

  return (
    <Table
      striped
      bordered
      hover
      size="md"
      style={{ height: "50px", overflow: "scroll" }}
    >
      <thead className="file">
        <tr>
          <th>File No.</th>
          <th>File Name</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody className="file_table">
        {files.map((file) => (
          <tr>
            <td>{file.file_no}</td>
            <td>{file.file_name}</td>
            <td>{file.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

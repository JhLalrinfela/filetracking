import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FileOwnerTable from "./table";
import "../../css/tabs.css";

function TabsOne() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="profile" title="Dashboard">
        <ul className="list-group">
          <li className="list-group-item">
            No. of Pending Letter :&nbsp;
            <span className="badge bg-danger">9</span>
          </li>
          <li className="list-group-item">
            No. of Complete Letter :&nbsp;
            <span className="badge bg-primary">9</span>
          </li>
        </ul>
      </Tab>
    </Tabs>
  );
}

function TabsTwo() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="profile" title="File leh A Changtute">
        <FileOwnerTable />
      </Tab>
    </Tabs>
  );
}

export { TabsOne, TabsTwo };

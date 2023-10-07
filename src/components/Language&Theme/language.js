import Dropdown from "react-bootstrap/Dropdown";

function Language() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic" className="ms-4">
        en-US
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Language;

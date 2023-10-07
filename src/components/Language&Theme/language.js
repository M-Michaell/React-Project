import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeCurrentLang } from "../../store/slices/languageSlice";

function Language() {


  const language = useSelector((state)=> state.language.current_lang);
  const dispatch = useDispatch();
  

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic" className="ms-4">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{dispatch(changeCurrentLang("en-US"))}}>en</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(changeCurrentLang("ar-SA"))}}>ar</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Language;

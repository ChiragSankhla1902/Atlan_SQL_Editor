import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/cobalt.css";
/**
 * The component to display the code editor for the SQL query
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
 function QuerySpace(props) {

  return (
    <>
      <CodeMirror
        value={props.defaultQuery}
        options={{
          mode: "sql",
          theme: "cobalt",
          lineNumbers: true,
        }}
       
      />

    </>
  );
}


export default QuerySpace;
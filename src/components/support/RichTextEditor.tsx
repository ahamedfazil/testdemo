import * as React from "react";
import { Editor } from "@progress/kendo-editor-react-wrapper";
// import { Menu, MenuItem, SubMenu, ContextMenu, PanelBar, PanelItem, SubItems, TabStrip, Tabs, Tab, Content } from '@progress/kendo-layout-react-wrapper';
import "./RichTextEditor.scss";
import "@progress/kendo-ui";

interface IRichTextEditor {
  value: any;
  getEvent?: (event: any) => void;
  disabled?: boolean;
  placeholder: string;
}

export class RichTextEditor extends React.Component<IRichTextEditor, {}> {
  constructor(props: IRichTextEditor) {
    super(props);
  }

  render() {
    return (
      <div>
        <Editor
          value={this.props.value}
          change={this._onItemsChange}
          resizable={true}
          placeholder={this.props.placeholder}
          tools={[
            { name: "bold" },
            { name: "italic" },
            { name: "underline" },
            { name: "strikethrough" },
            { name: "justifyLeft" },
            { name: "justifyCenter" },
            { name: "justifyRight" },
            { name: "justifyFull" },
            { name: "insertUnorderedList" },
            { name: "insertOrderedList" },
            { name: "indent" },
            { name: "outdent" },
            { name: "createLink" },
            { name: "unlink" },
            { name: "createTable" },
            { name: "addRowAbove" },
            { name: "addRowBelow" },
            { name: "addColumnLeft" },
            { name: "addColumnRight" },
            { name: "deleteRow" },
            { name: "deleteColumn" },
            { name: "foreColor" },
            { name: "backColor" }
          ]}
        />
      </div>
    );
  }

  private _onItemsChange = (event: any): void => {
    this.props.getEvent(event);
  };
}

import * as React from "react";

import { autobind } from "@uifabric/utilities";
import {
  GroupedList,
  IGroup,
  IGroupDividerProps
} from "office-ui-fabric-react/lib/components/GroupedList";
import { Link } from "office-ui-fabric-react/lib/Link";
import { createGroup } from "../../utils/Utilities";

interface ICustomGroupProps {
  title?: string;
  isCollapsed?: boolean;
  groupCollapse?: (title: string, isCollapsed: boolean) => void;
  showHeader?: boolean;
  showFooter?: boolean;
  item?: any;
}

interface ICustomGroupState {
  _items: any[];
  _groups: IGroup[];
}

export default class CustomGroup extends React.Component<
  ICustomGroupProps,
  ICustomGroupState
> {
  constructor(props: ICustomGroupProps) {
    super(props);

    this.state = {
      _items: ["CustomGroup"],
      _groups: createGroup(
        1,
        1,
        0,
        1,
        this.props.title,
        0,
        "",
        this.props.isCollapsed
      )
    };
  }

  // componentWillReceiveProps(newProps: ICustomGroupProps) {
  //   if (newProps.isCollapsed !== this.props.isCollapsed) {
  //     this.setState({
  //       _groups: createGroup(
  //         1,
  //         1,
  //         0,
  //         1,
  //         newProps.title,
  //         0,
  //         "",
  //         newProps.isCollapsed
  //       )
  //     });
  //   }
  // }

  public render(): JSX.Element {
    return (
      <GroupedList
        items={this.state._items}
        onRenderCell={this._onRenderCell}
        groupProps={{
          onRenderHeader: this._onRenderHeader,
          onRenderFooter: this.props.showFooter && this._onRenderFooter
        }}
        groups={this.state._groups}
      />
    );
  }

  @autobind
  private _onRenderCell(): JSX.Element {
    return <div className="custom-group-item">{this.props.item}</div>;
  }

  @autobind
  private _onRenderHeader(props: IGroupDividerProps): JSX.Element {
    const toggleCollapse = (e: any): void => {
      e.preventDefault();
      props.onToggleCollapse!(props.group!);
      if (this.props.groupCollapse) {
        this.props.groupCollapse(props.group.name, props.group.isCollapsed);
      }
    };

    return (
      <div className="ms-fontSize-l custom-group-header">
        <Link onClick={e => toggleCollapse(e)}>
          {props.group!.isCollapsed ? (
            <i className="ms-Icon ms-Icon--ChevronDown" aria-hidden="true" />
          ) : (
            <i className="ms-Icon ms-Icon--ChevronUp" aria-hidden="true" />
          )}
          &nbsp;
          {props.group!.name}
        </Link>
        <br />
      </div>
    );
  }

  private _onRenderFooter(props: IGroupDividerProps): JSX.Element {
    return <div>Footer {props.group!.name}</div>;
  }
}

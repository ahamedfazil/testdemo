import * as React from "react";
import {
  Label,
  autobind,
  Link,
  Icon,
  ActivityItem
} from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { ITicketComment } from "../../models/ITicketState";
import { RichTextEditor } from "./RichTextEditor";

interface ITicketCommentProps {
  ticketComment: ITicketComment[];
  getTicketComment?: (key: string, value: any) => void;
}

export class TicketComments extends React.Component<ITicketCommentProps, {}> {
  constructor(props: ITicketCommentProps) {
    super(props);
  }

  public render() {
    const ticketActivity = [
      {
        key: 1,
        activityDescription: [<div key={1}>Philippe Lampros</div>],
        activityIcon: <Icon iconName={"Message"} />,
        comments: [
          <span key={1}>Hello! I am making a comment and mentioning </span>
        ],
        timeStamp: "Just now"
      }
    ];
    const ticketActivityList: Array<JSX.Element> = [];
    ticketActivity.forEach((item: { key: string | number }) => {
      const props = item;
      ticketActivityList.push(<ActivityItem {...props} key={item.key} />);
    });
    return (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
          {ticketActivityList}
          <RichTextEditor
            value={""}
            getEvent={event => {
              this.props.getTicketComment(
                CONST.Lists.Tickets.Columns.kats_comments.Internal_Name,
                event.sender.body.innerHTML
              );
            }}
            placeholder="Enter Comment"
          />
        </div>
      </div>
    );
  }

  @autobind
  private keyFunction(keyVal: any) {
    let fullComments = this.props.ticketComment;
    if (fullComments.length > 0) {
      const index = fullComments
        .map(function(indexVal) {
          return indexVal["key"];
        })
        .indexOf(keyVal);
      return index;
    }
  }
}

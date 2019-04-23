import * as React from "react";
import {
  Label,
  autobind,
  Link,
  Icon,
  ActivityItem,
  PrimaryButton
} from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { ITicketComment } from "../../models/ITicketState";
import { RichTextEditor } from "./RichTextEditor";
import { onFormatDate } from "../../utils/Utilities";

interface ITicketCommentProps {
  ticketComment: ITicketComment[];
  currentUserName: string;
  currentUserEmail: string;
  isDisabled: boolean;
  getTicketComment?: (key: string, value: ITicketComment) => void;
}

interface ITicketCommentState {
  commentValue: string;
}

export class TicketComments extends React.Component<
  ITicketCommentProps,
  ITicketCommentState
> {
  constructor(props: ITicketCommentProps) {
    super(props);
    this.state = {
      commentValue: ""
    };
  }

  public render() {
    const ticketActivity = this.props.ticketComment.map(comment => {
      return {
        key: comment.key,
        activityDescription: [
          <Link
            target="_blank"
            key={comment.key}
            href={`mailto:${comment.userEmail}`}
          >
            {comment.userName}
          </Link>
        ],
        activityIcon: <Icon iconName={"Message"} />,
        comments: [<span key={comment.key}> {comment.commentValue}</span>],
        timeStamp: comment.timeStamp
      };
    });
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
            value={this.state.commentValue}
            getEvent={event => {
              this.setState({
                commentValue: event.sender.body.innerHTML
              });
            }}
            placeholder="Enter Comment"
          />
          <PrimaryButton
            disabled={this.props.isDisabled}
            iconProps={{ iconName: "CommentAdd" }}
            text="Add Comment"
            onClick={this._onClickPostMessage}
          />
        </div>
      </div>
    );
  }

  @autobind
  private _onClickPostMessage(event: any) {
    event.preventDefault();
    let currentComment: ITicketComment = {
      key: Date.now(),
      commentValue: this.state.commentValue,
      userName: this.props.currentUserName,
      userEmail: this.props.currentUserEmail,
      timeStamp: onFormatDate(new Date(), true)
    };
    this.props.getTicketComment(
      CONST.Lists.Tickets.Columns.kats_comments.Internal_Name,
      currentComment
    );
  }
}

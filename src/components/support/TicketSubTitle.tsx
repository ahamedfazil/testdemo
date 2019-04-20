import * as React from "react";
interface ITicketSubTitleProps {
  title: string;
  isCollapsed: boolean;
}

export const TicketSubTitle: React.SFC<ITicketSubTitleProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-fontSize-l custom-group-header">
      <button type="button" className="ms-Link root-125">
        {props.isCollapsed ? (
          <i className="ms-Icon ms-Icon--ChevronDown" aria-hidden="true" />
        ) : (
          <i className="ms-Icon ms-Icon--ChevronUp" aria-hidden="true" />
        )}
        &nbsp;{props.title}
      </button>
    </div>
  );
};

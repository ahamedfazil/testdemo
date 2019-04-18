import * as React from "react";
import { Icon } from "office-ui-fabric-react";

interface ITicketHeaderProps {
  isEdit: boolean;
  isView?: boolean;
  className?: string;
}

export const TicketHeader: React.SFC<ITicketHeaderProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div
        className={`${
          props.className
        } ms-font-xxl ms-Grid-col ms-sm12 ms-md12 ms-lg12`}
      >
        {props.isEdit ? (
          <div>
            <Icon iconName="PageEdit" />
            Edit Ticket
          </div>
        ) : (
          <div>
            <Icon iconName="PageAdd" />
            New Ticket
          </div>
        )}
      </div>
    </div>
  );
};

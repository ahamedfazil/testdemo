import * as React from "react";
import { MessageBar } from "office-ui-fabric-react/lib/MessageBar";
import { MessageBarType } from "office-ui-fabric-react/lib/components/MessageBar";

interface IErrorMessageProps {
  error?: any;
}

export const ErrorMessage: React.SFC<IErrorMessageProps> = (
  props
): JSX.Element => {
  return (
    <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
      Error - {props.error}
    </MessageBar>
  );
};

export const UnAuthorizedMessage: React.SFC<
  IErrorMessageProps
> = (): JSX.Element => {
  return (
    <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
      You are not authorized to access this page.
    </MessageBar>
  );
};

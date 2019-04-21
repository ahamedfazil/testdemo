import * as React from "react";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import { IDialogBlocking } from "../../models/ITicketState";
import "./DialogBlocking.scss";

export class DialogBlocking extends React.Component<IDialogBlocking, {}> {
  constructor(props: IDialogBlocking) {
    super(props);
  }

  public render(): JSX.Element {
    const dialogProps: IDialogBlocking = this.props;
    return (
      <div>
        {!dialogProps.showConfirmDialog ? (
          <Dialog
            hidden={!dialogProps.showProgressDialog}
            dialogContentProps={{
              type: DialogType.normal,
              title: dialogProps.dialogTitle
            }}
            modalProps={{
              isBlocking: true,
              containerClassName: "ms-dialogMainOverride ms-Dialog-main-content"
            }}
          >
            <div className="ms-Dialog-main-content">
              {dialogProps.showProgress === true ? (
                <ProgressIndicator
                  description={dialogProps.progressDialogText}
                />
              ) : (
                <DialogFooter>
                  <PrimaryButton onClick={this._closeDialog} text="OK" />
                </DialogFooter>
              )}
            </div>
          </Dialog>
        ) : (
          <Dialog
            hidden={!dialogProps.showConfirmDialog}
            dialogContentProps={{
              type: DialogType.normal,
              title: dialogProps.dialogTitle
            }}
            modalProps={{
              isBlocking: true,
              containerClassName: "ms-dialogMainOverride"
            }}
          >
            <DialogFooter>
              <PrimaryButton onClick={() => this._OKorCancel(true)} text="OK" />
              <DefaultButton
                onClick={() => this._OKorCancel(false)}
                text="Cancel"
              />
            </DialogFooter>
          </Dialog>
        )}
      </div>
    );
  }

  private _closeDialog = (): void => {
    if (this.props.error) {
      this.props.getDialogResponse(false);
    } else {
      this.props.getDialogResponse(true);
    }
  };

  private _OKorCancel = (isOK: boolean): void => {
    this.props.getDialogResponse(isOK);
  };
}

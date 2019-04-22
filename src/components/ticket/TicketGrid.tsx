import * as React from "react";
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { ITicketGridProps } from "../../models/ITicketGridProps";
import { ITicketGridState } from "../../models/ITicketGridState";
import { initialTicketGridState } from "../../store/initialState";
import { Link, autobind, PrimaryButton } from "office-ui-fabric-react";
import { navigateToNewForm } from "../../services/SiteAPI";

export class TicketGrid extends React.Component<
  ITicketGridProps,
  ITicketGridState
> {
  constructor(props: ITicketGridProps) {
    super(props);
    this.state = initialTicketGridState(this.props.store);
  }

  private _export: ExcelExport;
  public render(): JSX.Element {
    return (
      <div>
        <PrimaryButton
          primary={true}
          onClick={e => {
            this.props.onChangePath(`/editticket/${50}`);
          }}
        >
          Edit Ticket
        </PrimaryButton>
        <PrimaryButton
          primary={true}
          onClick={e => {
            this.props.onChangePath(`/viewticket/${50}`);
          }}
        >
          View Ticket
        </PrimaryButton>
        <ExcelExport
          data={this.state.fullTicket}
          ref={exporter => {
            this._export = exporter;
          }}
          fileName="TicketReport.xlsx"
        >
          <Grid
            total={this.state.fullTicket ? this.state.fullTicket.length : 0}
            pageable={this.state.isPageable}
            skip={this.state.skip}
            take={this.state.take}
            data={this.state.fullTicket}
            onPageChange={this.pageChange}
          >
            <GridToolbar>
              <button
                disabled={
                  this.state.fullTicket && this.state.fullTicket.length === 0
                }
                title="Export to Excel"
                className="k-button k-primary"
                onClick={e => this.export(e)}
              >
                Export to Excel
              </button>
            </GridToolbar>
            <Column
              title="Link to form"
              cell={props => (
                <td>
                  <Link target="_blank" href={props.dataItem["LinkToForm"]}>
                    {props.dataItem["TicketID"]}
                  </Link>
                </td>
              )}
            />
            <Column field="TicketID" title="TicketID" />
            <Column field="EngagementName" title="Engagement Name" />
          </Grid>
        </ExcelExport>
      </div>
    );
  }

  private export = (e: any) => {
    e.preventDefault();
    this._export.save();
  };
  private pageChange = (e: any) => {
    e.preventDefault();
    this.setState({
      skip: e.page.skip,
      take: e.page.take
    });
  };
}

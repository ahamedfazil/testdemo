{
  /* <div className="ms-Grid-row">
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Ticket ID</label>
  <TextField
    value={this.state.TicketId}
    name={CONST.Lists.Tickets.Columns.TicketId.Internal_Name}
    placeholder={"KATS-00001"}
    onChange={this._onTextChange}
    disabled={true}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Created</label>
  <TextField
    value={this.state.Created}
    name={
      CONST.Lists.Tickets.Columns.Created_x0020_Date.Internal_Name
    }
    disabled={true}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Status</label>
  <Dropdown
    placeholder={"Select Status"}
    options={dropdownOptions(ticketDictionary.status)}
    selectedKey={this.state.OData__Status}
    onChange={(event: any, option: any) => {
      this.setState({
        OData__Status: option.key
      });
    }}
  />
</div>
</div>
<div className="ms-Grid-row">
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Sentinel GIS ID</label>
  <Dropdown
    placeholder={"Select Sentinel GIS ID"}
    options={dropdownOptions(ticketDictionary.sentinelGisId)}
    selectedKey={this.state.Sentinel_x0020_GIS_x0020_ID}
    onChange={(event: any, option: any) => {
      this.setState({
        Sentinel_x0020_GIS_x0020_ID: option.key
      });
    }}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Priority</label>
  <Dropdown
    placeholder={"Select Priority"}
    options={[
      { key: 0, text: "Normal" },
      { key: 1, text: "Urgent" }
    ]}
    selectedKey={this.state.IsUrgent}
    onChange={(event: any, option: any) => {
      this.setState({
        IsUrgent: option.key
      });
    }}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Submitter</label>
  <PeoplePicker
    getUserNames={person => {
      this.setState({
        Submitted_x0020_ById: person
      });
    }}
    allowMulti={false}
    defaultPeople={this.state.Submitted_x0020_ById}
    disabled={false}
    placeholder={"Provide Submitter"}
  />
</div>
</div>
<div className="ms-Grid-row">
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Engagement Name</label>
  <TextField
    value={this.state.Engagement_x0020_Name}
    name={
      CONST.Lists.Tickets.Columns.Engagement_x0020_Name
        .Internal_Name
    }
    placeholder={"Enter Engagement name"}
    onChange={this._onTextChange}
    disabled={false}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Period End</label>
  <DatePicker
    value={getDateFromString(
      this.state.Accounting_x0020_Period_x0020_En
    )}
    placeholder={"DD/MM/YYYY"}
    allowTextInput={true}
    onSelectDate={val => {
      this.setState({
        Accounting_x0020_Period_x0020_En: onFormatDate(val)
      });
    }}
    formatDate={onFormatDate}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Assignee</label>
  <PeoplePicker
    getUserNames={person => {
      this.setState({
        AssigneeId: person
      });
    }}
    defaultPeople={this.state.AssigneeId}
    allowMulti={false}
    disabled={true}
    placeholder={"Provide Assignee"}
  />
</div>
</div>
<div className="ms-Grid-row" style={{ paddingTop: "3px" }}>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Engagement Type</label>
  <Dropdown
    placeholder={"Select Engagement Type"}
    options={dropdownOptions(ticketDictionary.engagementType)}
    title={
      CONST.Lists.Tickets.Columns.Engagement_x0020_Type
        .Internal_Name
    }
    selectedKey={this.state.Engagement_x0020_Type}
    multiSelect
    onChange={(event: any, option: any) => {
      const index = this.state.Engagement_x0020_Type.indexOf(
        option.key
      );
      this._onMultiSelectDropdown(
        CONST.Lists.Tickets.Columns.Engagement_x0020_Type
          .Internal_Name,
        option,
        index
      );
    }}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Charge Code</label>
  <TextField
    value={this.state.Engagement_x0020_Charge_x0020_Co}
    name={
      CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co
        .Internal_Name
    }
    placeholder={"Enter Charge Code"}
    onChange={this._onTextChange}
    disabled={false}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Audit Team</label>
  <PeoplePicker
    getUserNames={person => {
      this.setState({
        Audit_x0020_Team_x0020_CCId: person
      });
    }}
    allowMulti={true}
    defaultPeople={this.state.Audit_x0020_Team_x0020_CCId}
    disabled={false}
    placeholder={"Provide Audit Team"}
  />
</div>
</div>
<div className="ms-Grid-row" style={{ paddingTop: "2px" }}>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Accounting Frameworks</label>
  <Dropdown
    placeholder={"Select Accounting Frameworks"}
    options={dropdownOptions(
      ticketDictionary.accountingFramework
    )}
    selectedKey={this.state.Accounting_x0020_Framework}
    multiSelect
    onChange={(event: any, option: any) => {
      const index = this.state.Accounting_x0020_Framework.indexOf(
        option.key
      );
      this._onMultiSelectDropdown(
        CONST.Lists.Tickets.Columns.Accounting_x0020_Framework
          .Internal_Name,
        option,
        index
      );
    }}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <br />
  <Checkbox
    name={
      CONST.Lists.Tickets.Columns.Required_x0020_Consultation
        .Internal_Name
    }
    label={"Required Consultation"}
    defaultChecked={this.state.Required_x0020_Consultation}
    onChange={this._onCheckboxChange}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Engagement RI</label>
  <PeoplePicker
    getUserNames={person => {
      this.setState({
        Responsible_x0020_IndividualId: person
      });
    }}
    allowMulti={false}
    defaultPeople={this.state.Responsible_x0020_IndividualId}
    disabled={false}
    placeholder={"Provide Engagement RI"}
  />
</div>
</div>
<div className="ms-Grid-row">
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Auditing Standards</label>
  <Dropdown
    placeholder={"Select Auditing Standards"}
    options={dropdownOptions(ticketDictionary.auditingStandard)}
    selectedKey={this.state.Auditing_x0020_Standards}
    multiSelect
    onChange={(event: any, option: any) => {
      const index = this.state.Auditing_x0020_Standards.indexOf(
        option.key
      );
      this._onMultiSelectDropdown(
        CONST.Lists.Tickets.Columns.Auditing_x0020_Standards
          .Internal_Name,
        option,
        index
      );
    }}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Category</label>
  <KendoCombo
    textValue={this.state.OData__Category}
    getLabelValue={value => {
      this.setState({ OData__Category: value });
      //Setting support group
      this.settingSupportGroup(value);
    }}
    placeholder={"Enter Category"}
    isRemote={false}
    fullValues={kendoComboOptionGenerator(categoryTitleOptions)}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Support Team</label>
  &nbsp;
  <i
    className="ms-Icon ms-Icon--Group"
    style={{ fontSize: "18px" }}
    aria-hidden="true"
  />
  <TextField
    value={this.state.Support_x0020_Team}
    readOnly={true}
    placeholder={"Set Based On Category"}
  />
</div>
</div>
<div className="ms-Grid-row" style={{ paddingTop: "2px" }}>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Subject</label>
  <TextField
    value={this.state.Title}
    name={CONST.Lists.Tickets.Columns.Title.Internal_Name}
    placeholder={"Enter Title"}
    onChange={this._onTextChange}
    disabled={false}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Topics</label>
  <KatsTagPicker
    getValues={val => {
      this.setState({
        Topics: val
      });
    }}
    headerText="Suggested Topics"
    noResultText="No Topics Found"
    getOnBlur={() => {
      // if (this.state.fields.length === 0) {
      //   this.setState({
      //     formErrors: {
      //       ...this.state.formErrors,
      //       label: true
      //     }
      //   });
      // }
    }}
    placeholder={"Enter Topics"}
    defaultValue={this.state.Topics}
    options={tagPickerOptionGenerator(categoryTopicsOptions)}
  />
</div>
<div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
  <label className="ms-Label">Watchers</label>
  <PeoplePicker
    getUserNames={person => {
      this.setState({
        WatcherId: person
      });
    }}
    allowMulti={true}
    defaultPeople={this.state.WatcherId}
    disabled={false}
    placeholder={"Provide Watchers"}
  />
</div>
</div>
<div className="ms-Grid-row">
<div className="cell ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-TextField">
  <label className="ms-Label">Detailed Analysis</label>
  <TextField
    value={this.state.Detailed_x0020_Analysis}
    name={
      CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis
        .Internal_Name
    }
    placeholder={"Provide Description"}
    onChange={this._onTextChange}
    multiline
    rows={5}
    disabled={false}
  />
</div>
</div>
{userState.currentUser.isSupportUser && (
<div>
  <div className="ms-Grid-row">
    <div className="cell ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-TextField">
      <label className="ms-Label">Conclusion</label>
      <TextField
        value={this.state.Conclusion}
        name={
          CONST.Lists.Tickets.Columns.Conclusion.Internal_Name
        }
        placeholder={"Enter Conclusion"}
        onChange={this._onTextChange}
        multiline
        rows={5}
      />
    </div>
  </div>
  <div className="ms-Grid-row">
    <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
      <label className="ms-Label">Ticket Type</label>
      <Dropdown
        placeholder={"Select Ticket Type"}
        options={dropdownOptions(ticketDictionary.ticketType)}
        selectedKey={this.state.Ticket_x0020_Type}
        onChange={(event: any, option: any) => {
          this.setState({
            OData__Status: option.key
          });
        }}
      />
    </div>
    <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
      <br />
      <Checkbox
        name={CONST.Lists.Tickets.Columns.Training.Internal_Name}
        label={"Training candidate"}
        defaultChecked={this.state.Training}
        onChange={this._onCheckboxChange}
      />
    </div>
    <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
      <br />
      <Checkbox
        name={CONST.Lists.Tickets.Columns.FAQ.Internal_Name}
        label={"FAQ candidate"}
        defaultChecked={this.state.FAQ}
        onChange={this._onCheckboxChange}
      />
    </div>
  </div>
  <div className="ms-Grid-row" style={{ paddingTop: "2px" }}>
    <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
      <label className="ms-Label">Labels</label>
      <KatsTagPicker
        getValues={val => {
          this.setState({
            Label: val
          });
        }}
        getOnBlur={() => {}}
        headerText="Suggested Labels"
        noResultText="No Label Found"
        placeholder={"Enter Label"}
        defaultValue={this.state.Label}
        options={tagPickerOptionGenerator(
          ticketDictionary.labels
        )}
      />
    </div>
    <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
      <br />
      <Checkbox
        name={
          CONST.Lists.Tickets.Columns.Add_x0020_to_x0020_KB
            .Internal_Name
        }
        label={"Knowledge Base candidate"}
        defaultChecked={this.state.Add_x0020_to_x0020_KB}
        onChange={this._onCheckboxChange}
      />
    </div>
  </div>
</div>
)} */
}

export default undefined;

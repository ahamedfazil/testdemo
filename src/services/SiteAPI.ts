import { ISiteProps } from "../models/ISiteProps";
import { ISiteInfo } from "../models/ISiteState";

export const navigateToNewForm = (props: ISiteProps) => {
  let siteState: ISiteInfo = Object.assign({}, props.store.site.siteInfo);
  siteState.isNewForm = true;
  siteState.isEditForm = siteState.isViewForm = false;
  siteState.itemID = null;
  props.updateSiteInfo(siteState);
  props.onChangePath("newticket");
};

// export const setFormTypeAndID = (props: ISiteProps) => {
//     try {
//         let siteState: ISiteInfo = Object.assign({}, props.store.site.siteInfo);

//     } catch {
//       this.setState({
//         isDataReady: true,
//         error: "Error while getting invoice data"
//       });
//     }
//   }

import { ISiteProps } from "../models/ISiteProps";
import { ISiteInfo } from "../models/ISiteState";
import { subStrAfterChars } from "../utils/Utilities";
import { ITicketProps } from "../models/ITicketProps";

export const navigateToNewForm = (props: ISiteProps) => {
  let siteState: ISiteInfo = Object.assign({}, props.store.site.siteInfo);
  siteState.isNewForm = true;
  siteState.isEditForm = siteState.isViewForm = false;
  siteState.itemID = null;
  props.updateSiteInfo(siteState);
  props.onChangePath("newticket");
};

export const setFormTypeAndID = (props: ITicketProps) => {
  let siteState: ISiteInfo = Object.assign({}, props.store.site.siteInfo);
  try {
    if (window.location.hash) {
      if (window.location.hash.toLowerCase().startsWith("#newticket")) {
        siteState.isNewForm = true;
        siteState.isEditForm = siteState.isViewForm = false;
      } else if (window.location.hash.toLowerCase().startsWith("#editticket")) {
        siteState.isEditForm = true;
        siteState.isNewForm = siteState.isViewForm = false;
        siteState.itemID = getItemIDFromURL(window.location.hash);
      } else if (window.location.hash.toLowerCase().startsWith("#viewticket")) {
        siteState.isViewForm = true;
        siteState.isNewForm = siteState.isEditForm = false;
        siteState.itemID = getItemIDFromURL(window.location.hash);
      } else {
        siteState.isNewForm = siteState.isEditForm = siteState.isViewForm = false;
      }
      props.updateSiteInfo(siteState);
    }
  } catch {
    siteState.error = "Something went wrong while setting form type and ID";
    props.updateSiteInfo(siteState);
  }
};

const getItemIDFromURL = (hashURL: string): number => {
  try {
    let itemID = subStrAfterChars(hashURL, "/");
    if (itemID) {
      itemID = itemID.match(/\d+/)[0];
      return parseInt(itemID, 10);
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

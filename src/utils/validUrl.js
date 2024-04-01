import { buildFileUrl } from "@sanity/asset-utils";

export const getValidUrl = (file) => {
  if (file?.asset) {
    const extension = file?.asset?._ref.split("file-")[1].split("-")[1];
    const correct = file?.asset?._ref.split("file-")[1].split("-")[0];
    const fileLink =
      buildFileUrl(file?.asset, {
        projectId: "9nxeopkt",
        dataset: "production",
      }).split("/undefined")[0] +
      "/" +
      correct +
      "." +
      extension;
    return fileLink;
  }
};

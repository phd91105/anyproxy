import { Body } from "../types";

export default {
  pattern: /^https:\/\/photos.adobe.io\/v\d\/accounts/,
  rewrite: (body: Body) => {
    body = body.toString().replace(/while.{7}\n/, "");
    body = JSON.parse(body);

    body.entitlement = {
      ...body.entitlement,
      status: "subscriber",
      current_subs: {
        product_id: "lightroom",
        store: "adobe",
        purchase_date: "2019-10-10T16:32:10.254954Z",
        sao: {
          inpkg_CCES: "0",
          inpkg_CCLE: "1",
          inpkg_CCSN: "0",
          inpkg_CCSV: "0",
          inpkg_LCCC: "0",
          inpkg_LPES: "0",
          inpkg_LRBRL: "0",
          inpkg_LRMAC: "0",
          inpkg_LRMC: "0",
          inpkg_LRMP: "0",
          inpkg_LRTB: "0",
          inpkg_PHLT: "0",
          inpkg_PHLT2: "0",
          inpkg_PLES: "0",
          storage_quota: "100",
        },
        storage: {
          used: 0,
          limit: 1154487209165,
          display_limit: 1099511627776,
          warn: 992137445376,
        },
      },
      trial: {
        start: "2023-09-15T06:31:49.315459Z",
        end: "2023-10-20T06:31:49.315459Z",
      },
    };
    delete body.entitlement.current_subs.deletion_date;
    body.avatar.placeholder = true;

    return body;
  },
};

import "./TableAssets";

import { TableBody } from "./TableBody";
import { TableTypes } from "../../Types/Table";

export const Table = ( {data}: TableTypes) => {

  return (
    <div className="table100 ver1">
      <div className="table100-head">
        <table>
          <thead>
            <tr className="row100 head">
              <th className="cell100 column1">Transaction Signature</th>
              <th className="cell100 column2">Block</th>
              <th className="cell100 column3">Timestamp</th>
              <th className="cell100 column4">Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table100-body js-pscroll ps ps--active-y">
        <TableBody data={data} />
      </div>
    </div>
  );
};

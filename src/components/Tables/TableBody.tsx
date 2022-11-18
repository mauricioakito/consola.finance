import copyIcon from "../../assets/copy-icon.svg";
import { TableTypes } from "../../Types/Table";
import { RequestTypes } from "../../Types/Request";

export const TableBody = ( {data} : TableTypes) => {

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatedDate = (date: number) => {
    const formatedDate = new Date(date * 1000).toUTCString();
    return formatedDate.toString();
  };

  if (!data) return null;

  return (
    <table>
      <tbody>
        {data &&
          data.map((e: RequestTypes, key: number) => {
            const { blockTime, confirmationStatus, signature, slot } = e;

            return (
              <tr key={key} className="row100 body">
                <td className="cell100 column1">
                  <span className="cellText">{signature} </span>
                  <button
                    className="copyButton"
                    onClick={() => copyText(signature)}
                  >
                    <img className="copyIcon" src={copyIcon} />
                  </button>
                </td>
                <td className="cell100 column2">
                  <span className="cellText">{slot} </span>
                  <button className="copyButton" onClick={() => copyText(slot.toString())}>
                    <img className="copyIcon" src={copyIcon} />
                  </button>
                </td>
                <td className="cell100 column3">
                  <span className="cellText">{formatedDate(blockTime)}</span>
                </td>
                <td className="cell100 column4">
                  <span className="cellText">{confirmationStatus}</span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

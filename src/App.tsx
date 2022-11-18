import { useEffect, useState } from "react";
import { GetData } from "./utils/GetData";
import { Table } from "./components/Tables/Table";
import classNames from "classnames";
import { RequestTypes } from "./Types/Request";
import { ConfirmedSignatureInfo } from "@solana/web3.js";

function App() {
  const [data, setData] = useState<RequestTypes[] | ConfirmedSignatureInfo[]>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleFetch = async () => {
    setIsLoading(true);
     const oldData = data && data;
    const newFetchedData = await GetData();
    if (newFetchedData && oldData) {
      const newData: any = [...oldData, ...newFetchedData];
      setData(newData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetData()
      .then((value: ConfirmedSignatureInfo[]) => {
        setData(value);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!data) return null;

  return (
    <div className="App">
      <Table data={data} />
      <button
        onClick={handleFetch}
        className={classNames("fetchMore", {
          ["isLoading"]: isLoading,
        })}
      >
        {isLoading ? "Loading..." : "Fetch more transactions"}
      </button>
    </div>
  );
}

export default App;

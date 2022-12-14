import { useEffect, useState } from "react";
import { getData } from "./utils/getData";
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
        const newFetchedData = await getData();

        const unique: RequestTypes[] = [];

        if (newFetchedData && oldData) {
            const newData: any = [...oldData.reverse(), ...newFetchedData.reverse()];

            newData.forEach((item: RequestTypes) => 
                unique.filter(uniqueItem => uniqueItem.slot === item.slot).length > 0 ? null : unique.push(item));
        
        setData(unique);
        setIsLoading(false);
        }
    };

    useEffect(() => {
        getData()
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

import axios from "axios";

export const getData = () => {

    const options = {
        method: "GET",
        url: "https://solana-gateway.moralis.io/account/mainnet/rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt/portfolio",
        headers: {
            accept: "application/json",
            "X-API-Key":
                "mcbkbDlkOWJ99GZW1eEbKkyTYjWCd7DyBbHzT2eZThbOo8hNa5PrvU8lN3Ixd91e",
        },
    };

    axios
        .request(options)
        .then(function (response) {
            const parsedResponse = Object.entries(response.data)
            return parsedResponse;
        })
        .catch(function (error) {
            console.error(error);
        });
}

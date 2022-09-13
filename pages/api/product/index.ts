import type { NextApiRequest , NextApiResponse  } from "next";
import {extractSheets} from "spreadsheet-to-json"

const handler = (req:NextApiRequest,res:NextApiResponse)=>{
    extractSheets(
        {
          // your google spreadhsheet key
          spreadsheetKey: "1iqYC8GpiDaZNWRi-_nRDNMd7ft1MWaaBl9BWmSkBbII",
          // your google oauth2 credentials or API_KEY
          credentials: require("../../../credentials.json"),
          // optional: names of the sheets you want to extract
          sheetsToExtract: ["Product"],
          // optional: custom function to parse the cells
        },
        function(err:any, data:any) {
            res.status(200).json(data)
        }
    )
}
export default handler
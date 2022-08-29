import type { NextApiRequest , NextApiResponse  } from "next";
import {extractSheets} from "spreadsheet-to-json"

const handler = (req:NextApiRequest,res:NextApiResponse)=>{
    extractSheets({
        
    })

}
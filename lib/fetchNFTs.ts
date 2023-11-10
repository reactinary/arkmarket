require('dotenv').config();
import axios from "axios"



export async function fetchNFTs() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTsForCollection`
  const address = "0x9a38dec0590abc8c883d72e52391090e948ddf12"
  const startToken = 1

  const response = await axios.get(`${baseURL}?contractAddress=${address}&withMetadata=true&startToken=${startToken}`)
  console.log(response.data)
  return response.data.nfts;
}

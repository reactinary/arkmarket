import { FilteredNFT } from '@/types';
import NFTCard from './NFTCard';



type NFTGridProps = {
  filteredNFTs: FilteredNFT[];
  isLoading: boolean;
};


export default function NFTGrid({ filteredNFTs, isLoading }: NFTGridProps) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredNFTs.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {filteredNFTs.map((NFT: FilteredNFT) => (
            <div key={NFT.id.tokenId}>
              <NFTCard
                key={NFT.id.tokenId}
                id={NFT.id.tokenId}
                imageUrl={NFT.media && NFT.media[0] ? NFT.media[0].thumbnail : ''}
                name={NFT.metadata.name}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No NFTs to display</p>
      )}
    </div>
  );
}

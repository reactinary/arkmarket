

export type FilteredNFT = {
  id: {
    tokenId: string;
  };
  media?: {
    thumbnail: string;
  }[];
  metadata: {
    name: string;
  };
};

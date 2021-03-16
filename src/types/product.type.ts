export type ProductType = {
  product: {
    strapiId: number;
    Nazwa: string;
    AktualnaCena: number;
    PoprzedniaCena?: number;
    Opis: string;
    Grafika: {
      url: string;
    };
    Wilgoc?: string;
    Popiol?: string;
    Kalorycznosc?: string;
    Siarka?: string;
  };
};

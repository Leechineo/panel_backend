export type SectionType = 'banner' | 'product';

export type SectionItemRules = {
  showProductName: boolean;
  showProductDescription: boolean;
  showBrand: boolean;
};

export type SectionItem = {
  image: string;
  linkedProductId: string;
  rules: SectionItemRules;
};

export interface ISectionEntity {
  id: string;
  order: number;
  type: SectionType;
  items: SectionItem[];
}

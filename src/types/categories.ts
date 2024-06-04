import { ILanguage } from "@/types/common";

export interface ICategories {
  id: number;
  name: ILanguage;
  slug: ILanguage;
  cat_photo: string;
  cat_icon: string;
  cat_icon_svg: string;
}

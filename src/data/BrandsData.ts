import { Brand } from "@/types/entities";

import { AccountsData } from "./AccountsData";

// Function to populate associate information from account data
function populateAssociateInfo(
  brand: Omit<
    Brand,
    | "associateFirstName"
    | "associateLastName"
    | "associateEmail"
    | "associatePhone"
    | "associateInitials"
    | "associateBackground"
  >
): Brand {
  const account = AccountsData.find((acc) => acc.accountId === brand.accountId);

  if (!account) {
    // Fallback if account not found
    return {
      ...brand,
      associateFirstName: "Unknown",
      associateLastName: "Account",
      associateEmail: "unknown@account.com",
      associatePhone: "+971-50-000-0000",
      associateInitials: "UA",
      associateBackground: "#6c757d",
    };
  }

  return {
    ...brand,
    associateFirstName: account.firstName,
    associateLastName: account.lastName,
    associateEmail: account.emailAddress,
    associatePhone: account.phoneNumber,
    associateInitials: account.avatarInitials,
    associateBackground: account.avatarBackground,
  };
}
// import onethousand from "@/assets/images/brands/1847-4.png";

// import Bait from "@/assets/images/brands/Bait Maryam.png";
// import BloOut from "@/assets/images/brands/Blo Out.png";
// import BrightFox from "@/assets/images/brands/BrightFox.png";
// import BrooklynCreamer from "@/assets/images/brands/Brooklyn Creamer.png";
// import Buyanyflowers from "@/assets/images/brands/Buyanyflowers.png";

// import CaliPoke from "@/assets/images/brands/Cali Poke.png";
// import Careem from "@/assets/images/brands/Careem.png";
// import Chatfood from "@/assets/images/brands/Chatfood.png";
// import Cinemacity from "@/assets/images/brands/Cinemacity.png";
// import DiveCampus from "@/assets/images/brands/DiveCampus.png";
// import Doner from "@/assets/images/brands/Doner & Gyros.png";
// import GaladariBrothers from "@/assets/images/brands/Galadari Brothers.png";
// import Hyperama from "@/assets/images/brands/Hyperama.png";
// import IKcon from "@/assets/images/brands/IKcon.png";
// import Ibiza from "@/assets/images/brands/Ibiza.png";
// import Idealz from "@/assets/images/brands/Idealz.png";
// import JustPadel from "@/assets/images/brands/Just Padel.png";
// import Kaykroo from "@/assets/images/brands/Kaykroo.png";
// import LaRomana from "@/assets/images/brands/La Romana.png";
// import Mahzooz from "@/assets/images/brands/Mahzooz.png";
// import Meshico from "@/assets/images/brands/Meshico.png";
// import Monviso from "@/assets/images/brands/Monviso.png";
// import MrBrisket from "@/assets/images/brands/Mr Brisket.png";
// import Addmind from "@/assets/images/brands/Addmind.png";
// import African_Eastern from "@/assets/images/brands/African_Eastern.jpg";
// import Al_Futtaim from "@/assets/images/brands/Al_Futtaim.png";
// import Al_Habtoor from "@/assets/images/brands/Al_Habtoor.png";
// import Barakat from "@/assets/images/brands/Barakat.png";
// import Barry_s from "@/assets/images/brands/Barry_s.png";
// import Billionaire_Dubai from "@/assets/images/brands/Billionaire_Dubai.png";
// import Binsina_Pharmacy from "@/assets/images/brands/Binsina_Pharmacy.png";
// import bioderma from "@/assets/images/brands/bioderma.png";
// import British_American_Tobacco from "@/assets/images/brands/British_American_Tobacco.png";
// import Caesars_Palace from "@/assets/images/brands/Caesars_Palace.png";
// import Cafu from "@/assets/images/brands/Cafu.png";
// import casio from "@/assets/images/brands/Casio.png";
// import celavi from "@/assets/images/brands/celavi.png";
// import Charley_s from "@/assets/images/brands/Charley_s.png";
// import Christian_Laurent from "@/assets/images/brands/Christian_Laurent.png";
// import Cryo from "@/assets/images/brands/Cryo.png";
// import Dairy_Queen from "@/assets/images/brands/DQ.png";
// import Danube_Properties from "@/assets/images/brands/Danube_Properties.png";
// import Dubai_Holding from "@/assets/images/brands/Dubai_Holding.png";
// import dunkin from "@/assets/images/brands/dunkin.png";
// import four_seasons from "@/assets/images/brands/four_seasons.png";
// import Fuddruckers from "@/assets/images/brands/Fuddruckers.png";
// import Guardex from "@/assets/images/brands/Guardex.png";
// import Guylian from "@/assets/images/brands/Guylian.png";
// import hersheys from "@/assets/images/brands/hersheys.png";
// import hilton from "@/assets/images/brands/Hilton.png";
// import Homes_R_Us from "@/assets/images/brands/Homes_R_Us.png";
// import Jamie_Oliver from "@/assets/images/brands/Jamie_Oliver.png";
// import jumeirah from "@/assets/images/brands/jumeirah.png";
// import Kcal from "@/assets/images/brands/Kcal.png";
// import Kitopi from "@/assets/images/brands/Kitopi.png";
// import Landmark_Group from "@/assets/images/brands/Landmark_Group.png";
// import marriott from "@/assets/images/brands/marriott.png";
// import Master_Chef from "@/assets/images/brands/Master_Chef.png";
// import Meydan from "@/assets/images/brands/Meydan.png";
// import Millennium from "@/assets/images/brands/Millennium.png";
// import Nando_s from "@/assets/images/brands/Nando_s.png";
// import Nbar from "@/assets/images/brands/Nbar.png";
// import Nikki_Beach from "@/assets/images/brands/Nikki_Beach.png";
// import noon from "@/assets/images/brands/Noon Logo.jpg";
// import Novomed from "@/assets/images/brands/Novomed logo.png";
// import ounass from "@/assets/images/brands/Ounass.png";
// import Panda_Express from "@/assets/images/brands/Panda_Express.png";
// import peugeot from "@/assets/images/brands/peugeot.png";
// import Pizzeria_de_michele from "@/assets/images/brands/Pizzeria_de_michele.png";
// import rees from "@/assets/images/brands/rees.png";
// import Ritz_Carlton from "@/assets/images/brands/Ritz_Carlton.png";
// import Saadiyat from "@/assets/images/brands/Saadiyat.png";
// import Seven from "@/assets/images/brands/Seven.png";
// import sivvi from "@/assets/images/brands/Sivvi Logo.png";
// import Sofitel from "@/assets/images/brands/Sofitel.png";
// import STK from "@/assets/images/brands/STK.png";
// import stretch from "@/assets/images/brands/stretch.png";
// import St_Regis from "@/assets/images/brands/St_Regis.png";
// import Supercare from "@/assets/images/brands/Supercare.png";
// import Uber from "@/assets/images/brands/Uber.png";
// import Ultra_Music_Festival from "@/assets/images/brands/Ultra_Music_Festival.png";
// import Washmen from "@/assets/images/brands/Washmen.png";
// import Xclusive_Yachts from "@/assets/images/brands/Xclusive_Yachts.png";
// import Zaatar_w_Zeit from "@/assets/images/brands/Zaatar_w_Zeit.png";
// import YasIsland from "@/assets/images/brands/Yas Island Logo.png";

export const rawBrandsData: Brand[] = [
  // ... (all the brand objects commented out)
];

export const brandsData: Brand[] = rawBrandsData.map(populateAssociateInfo);

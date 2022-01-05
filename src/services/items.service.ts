import axios, { AxiosRequestConfig } from "axios";
import { API } from "./API";
import itemOne from "../demoData/Assets/item1typeWriter.jpeg";
import itemTwo from "../demoData/Assets/item2leeShoes.jpeg";
import itemThree from "../demoData/Assets/item3Kitten.jpeg";
import itemFour from "../demoData/Assets/item4PlasticPlugs.jpeg";
import itemFive from "../demoData/Assets/item5lotion.jpeg";
import itemSix from "../demoData/Assets/item6prototype.jpeg";
import itemSeven from "../demoData/Assets/item7John.jpeg";
import itemEight from "../demoData/Assets/item8envelope.jpg";
import itemNine from "../demoData/Assets/item9Tea.jpeg";
import itemTen from "../demoData/Assets/item10Bonsai.jpeg";
import itemEleven from "../demoData/Assets/item11NailPolish.jpeg";
import itemTwelve from "../demoData/Assets/item12Brushes.jpeg";
import { Item } from "../types/types";

export const getItems = async () => {
  try {
    const config: AxiosRequestConfig = {
      method: "get",
      url: API.items,
      responseType: "stream",
    };
    const res = await axios(config);
    const enrichedRes = res.data.map((item: Item) => {
      if (item.picture === "itemOne") {
        item.picture = itemOne;
      }
      if (item.picture === "itemTwo") {
        item.picture = itemTwo;
      }
      if (item.picture === "itemThree") {
        item.picture = itemThree;
      }
      if (item.picture === "itemFour") {
        item.picture = itemFour;
      }
      if (item.picture === "itemFive") {
        item.picture = itemFive;
      }
      if (item.picture === "itemSix") {
        item.picture = itemSix;
      }
      if (item.picture === "itemSeven") {
        item.picture = itemSeven;
      }
      if (item.picture === "itemEight") {
        item.picture = itemEight;
      }
      if (item.picture === "itemNine") {
        item.picture = itemNine;
      }
      if (item.picture === "itemTen") {
        item.picture = itemTen;
      }
      if (item.picture === "itemEleven") {
        item.picture = itemEleven;
      }
      if (item.picture === "itemTwelve") {
        item.picture = itemTwelve;
      }
      return item;
    });
    return enrichedRes;
  } catch (e) {
    throw e;
  }
};

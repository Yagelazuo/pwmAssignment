import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { Home } from "./components/Home/Home";
import { HeaderContainer } from "./components/HeaderContainer/HeaderContainer";
import { Layout, Menu, Rate, Slider } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { TagOutlined } from "@ant-design/icons";

import { Item, SortTypeEnums } from "./types/types";
import { getItems } from "./services/items.service";

export const App = () => {
  const [itemsToShow, setItemsToShow] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [watchList, setWatchList] = useState(new Set());
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    (async () => {
      const items: Item[] = await getItems();
      setItemsToShow(items);
      setIsLoading(false);
    })();
  }, []);

  const onSearchItem = (value: string): void => {
    const tempValueArray: Item[] = [];
    itemsToShow.forEach((item) => {
      item.name.includes(value) && tempValueArray.push(item);
    });
    setItemsToShow(tempValueArray);
  };

  const setItemToWatch = (value: Item): void => {
    setWatchList((prev) => new Set(prev.add(value)));
  };

  const showWatchList = (): void => {
    if (watchList) {
      const tempShowList = [];
      // @ts-ignore
      for (let item of watchList.values()) tempShowList.push(item);
      setItemsToShow(tempShowList);
    }
  };

  const setSliderChange = (value: number): void => {
    const newItem = itemsToShow.map((item: Item) => {
      if (item.price <= value) return item;
    });

    // @ts-ignore
    const filtered: Item[] = newItem.filter((item) => {
      return item !== null;
    });
    if (filtered) {
      setItemsToShow(filtered);
    }
  };

  const onRateClick = (value: number): void => {
    const newItem = itemsToShow.map((item: Item) => {
      if (item.rate >= value) return item;
    });

    // @ts-ignore
    const filtered: Item[] = newItem.filter((el) => {
      return el != null;
    });
    if (filtered) {
      setItemsToShow(filtered);
    }
  };

  const setSort = (value: string): void => {
    switch (value) {
      case SortTypeEnums.mostExpensive:
        const x = itemsToShow.sort((a: Item, b: Item) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        setItemsToShow(x.reverse());
        forceUpdate();
        break;
      case SortTypeEnums.cheapest:
        const y = itemsToShow.sort((a: Item, b: Item) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        setItemsToShow(y);
        forceUpdate();
        break;
      case SortTypeEnums.topRated:
        const z = itemsToShow.sort((a: Item, b: Item) =>
          a.rate > b.rate ? 1 : b.rate > a.rate ? -1 : 0
        );
        setItemsToShow(z.reverse());
        forceUpdate();
        break;
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1">Price Range Selected</Menu.Item>
              <Menu.Item key="2" icon={<TagOutlined />}>
                <Slider
                  onChange={setSliderChange}
                  max={150}
                  defaultValue={150}
                  disabled={false}
                />
              </Menu.Item>
              <Menu.Item key="3">Rating select</Menu.Item>
              <Menu.Item key="4" onClick={() => onRateClick(2)}>
                <Rate disabled defaultValue={2} /> & up
              </Menu.Item>
              <Menu.Item key="5" onClick={() => onRateClick(3)}>
                <Rate disabled defaultValue={3} /> & up
              </Menu.Item>
              <Menu.Item key="6" onClick={() => onRateClick(4)}>
                <Rate disabled defaultValue={4} /> & up
              </Menu.Item>
              <Menu.Item key="7" onClick={() => onRateClick(5)}>
                <Rate disabled defaultValue={5} />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <HeaderContainer
              showWatchList={showWatchList}
              onSearchItem={onSearchItem}
            />
            <Content>
              <Home
                setSort={setSort}
                setItemToWatch={setItemToWatch}
                items={itemsToShow}
              />
            </Content>
          </Layout>
        </>
      )}
    </Layout>
  );
};

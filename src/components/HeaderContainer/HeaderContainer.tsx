import React from "react";
import { Avatar, Button } from "antd";
import Search from "antd/es/input/Search";
import AvatarMe from "../../demoData/Avatar/avatar.jpeg";
import { HeaderBar } from "./HeaderContainer.style";

export const HeaderContainer = (props: {
  showWatchList: Function;
  onSearchItem: Function;
}) => {
  const onSearch = (value: string) => props.onSearchItem(value);
  return (
    <div>
      <HeaderBar>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 500, marginRight: 50 }}
        />
        <Button
          style={{ marginRight: 20 }}
          onClick={() => props.showWatchList()}
        >
          Watch{" "}
        </Button>
        <Button style={{ marginRight: 20 }}>Cart</Button>
        <Avatar
          style={{ marginRight: -20 }}
          shape="circle"
          size="large"
          icon={<img alt="example" src={AvatarMe} />}
        />
      </HeaderBar>
    </div>
  );
};

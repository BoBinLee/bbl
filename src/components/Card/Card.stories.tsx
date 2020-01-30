import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { GithubCard, PortfolioCard, PostCard } from "src/components/Card";

const Root = styled.div`
  display: grid;
  grid-auto-columns: 50px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Child = styled.div`
  margin-top: 30px;
  grid-column: 2;
  grid-row: 1;
`;

storiesOf("Card", module)
  .addDecorator(getStory => <Root>{getStory()}</Root>)
  .add("with GithubCard", () => (
    <Child>
      <GithubCard />
    </Child>
  ))
  .add("with PortfolioCard", () => (
    <Child>
      <PortfolioCard
        githubUrl="https://github.com/BoBinLee/map"
        linkUrl="https://play.google.com/store/apps/details?id=com.nexters.intersection.intersectionapp"
      />
    </Child>
  ))
  .add("with PostCard", () => (
    <Child>
      <PostCard />
    </Child>
  ));

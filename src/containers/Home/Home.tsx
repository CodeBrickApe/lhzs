// import { getBlogEssayList, getEssayFindOne } from '../../services/Essay';
import { FC, useEffect, useState } from "react";
import { CoverWrapper, MottoSocialMediaBar, HomeContainer, HomeMain } from './styled';
import Slogan from './components/Slogan';
import Cover from './components/Cover';
import { Icon } from 'src/components/Icon/Icon';
import Announcement from './components/Announcement';
import Motto from './components/Motto';
import { useDarkMode } from 'src/hooks/useDarkMode';
import OpenSource from './components/OpenSource';
import DropDown from './components/DropDown';
import PostList from './components/PostList';




const Home: FC = () => {

  return (
    <HomeContainer>
      <CoverWrapper>
        <Cover></Cover>
        <MottoSocialMediaBar>
          <Slogan></Slogan>
          <Motto></Motto>
        </MottoSocialMediaBar>
        <DropDown></DropDown>
      </CoverWrapper>
      <HomeMain>
        <Announcement></Announcement>
        <OpenSource></OpenSource>
        <PostList></PostList>
      </HomeMain>
    </HomeContainer >
  )
}


export default Home
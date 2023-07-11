/* This is imported components of dev-portfolio library */
import {
  Header,
  TechStackList,
  Contact,
  // Intro,
  Gallery,
  Item,
  Masonry,
  Image,
  Carousel,
  Experience,
  TechStackInput,
  VisitorComment,
} from "dev-portfolio";
import styled from "styled-components";

import {
  CardInstruction,
  Introduction,
  // TeckstackInputInstruction,
  DisplayPortfolioInstruction,
  VisitorCounterInstruction,
  SkillInstruction,
  ChannelInstruction,
  // ProgressBarInstruction,
  ContactInstruction,
} from "./common";
import color from "./common/style/theme";
import useComment from "./hooks/useComment";
import "./App.css";

function App() {
  /**
   * If you want to view README.md of 'dev-portfolio', go to the link below.
   * {@link https://github.com/modern-agile-team/dev-portfolio#readme}
   */

  /* These are variables and handler functions used in VisitorComment component. */
  const {
    comment,
    commentList,
    password,
    nickname,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    handleCreateComment,
  } = useComment();

  return (
    /**
     * The 'className' in the <div> tag surrounding the components of 'dev-portfolio' must be 'App'.
     * Only then can the SideBar in the <Header> component recognize id props and automatically assign all components into the SideBar.
     */
    <div className="App">
      {/**
       * @component Header
       * {@link https://github.com/modern-agile-team/dev-portfolio#header}
       */}
      <Header
        headerBackgroundColor={color.mainColor}
        logoOption={{
          redirectUrl: "/",
          title: "GANI-portfolio",
          logoHidden: true,
          titleColor: `${color.pointColor}`,
          titleSize: "30px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/gani0325",
            color: `${color.subColor}`,
            size: "30px",
          },
          {
            name: "tistory",
            redirectUrl: "https://alpaca-gt.tistory.com/",
            color: `${color.subColor}`,
            size: "30px",
          },
        ]}
        sideBarOption={{
          mainTitle: "GANI-portfolio",
          mainTitleSize: "24px",
          mainTitleColor: "white",
          mainTitleAlign: "left",
          mainTitleBorderColor: "white",
          iconName: "ant-design:menu-fold-outlined", //Refer to the guidelines.
          iconSize: "28px",
          iconColor: `${color.pointColor}`,
          iconMargin: "0px 12px 0px 12px",
          itemTextColor: "white",
          itemTextAlign: "left",
          itemBackgroundColor: `${color.mainColor}`,
          itemHoverdBackgroundColor: `${color.pointColor}`,
          backgroundColor: `${color.mainColor}`,
        }}
      />

      <Introduction id="['Manual Introduction', 'bx:home-smile']" />

      <TechStackListTitle id="['TechStackList', 'bx:coin-stack']">
        Tech Stack List
        
      </TechStackListTitle>
      <TechStackList
        techStackList={[
          {
            nameOption: {
              name: "Python",
              logoName: "Python",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "82%",
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.skillColor}`,
              width: "100%",
              height: "35px",
            },
          },
          {
            nameOption: {
              name: "Javascript",
              logoName: "Javascript",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "72%",
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.skill2Color}`,
              width: "100%",
              height: "35px",
              // isBlinking: true,
            },
          },
          {
            nameOption: {
              name: "Nodejs",
              logoName: "Nodejs",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "66%",
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.skillColor}`,
              width: "100%",
              height: "35px",
            },
          },
          {
            nameOption: {
              name: "C++",
              logoName: "C",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "64%",
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.skill2Color}`,
              width: "100%",
              height: "35px",
              // isBlinking: true,
            },
          },
          {
            nameOption: {
              name: "Express",
              logoName: "express",
              fontSize: "18px",
              logoSize: "24px",
            },
            progressBarOption: {
              rateText: "55%",
              rateTextColor: `${color.lightGrey}`,
              backgroundColor: `${color.lightGrey}`,
              colorTo: `${color.skillColor}`,
              width: "100%",
              height: "35px",
              // isBlinking: true,
            },
          },
        ]}
        
      />

      {/* <SkillInstruction id="['Skill', 'charm:stack']" /> */}

      {/**
       * Just introduction for Carousel, Gallery and Masonry.
       *
       * If you want to view internal of DisplayPortfolioInstruction,
       * go to the './src/common/instruction/DisplayPortfolioInstruction.tsx'
       */}
      <DisplayPortfolioInstruction />

      {/**
       * @component Carousel
       * {@link https://github.com/modern-agile-team/dev-portfolio#carousel}
       */}
      <CarouselWrap>
        <Carousel id="['Carousel', 'bx:carousel']">
          <Item title="1" />
          <Item title="2" />
          <Item title="3" />
        </Carousel>
      </CarouselWrap>

      {/**
       * @component Gallery
       * {@link https://github.com/modern-agile-team/dev-portfolio#gallery}
       */}
      <Gallery id="['Career', 'clarity:image-gallery-line']">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
          <Item
            key={idx}
            hoverdInnerBorderColor={color.mainColor}
            titleColor={color.pointColor}
          />
        ))}
      </Gallery>




      {/* <CardInstruction id="['Card', 'bi:card-list']" /> */}

      <Experience id="['Experience', 'carbon:list-boxes']" theme="vertical" />
      
      {/* <ContactInstruction id="['Contact', 'fluent:contact-card-20-regular']" /> */}
      
    </div>
  );
}

export default App;

/**
 * Just styled component for TechStackList's title
 *
 * If you don't need this, delete both TechStackListTitle component and the style components below.
 */
const TechStackListTitle = styled.h1`
  color: ${color.mainColor};
  margin: 1em 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

/**
 * Just styled component for VisitorComment's title
 *
 * If you don't need this, delete both VisitorCommentTitle component and the style components below.
 */
const VisitorCommentTitle = styled.h1`
  margin: 1em 1em 0 1em;
  padding-bottom: 15px;
`;

/**
 * Just styled component for Carousel's title
 *
 * If you don't need this, delete both CarouselWrap component and the style components below.
 */
const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: white;
  }
`;

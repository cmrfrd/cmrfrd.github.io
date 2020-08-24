import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@components/Section';
import Name from '@components/Name';
import Icons from '@icons';
import mediaqueries from '@styles/media';
import { IAuthor } from '@types';

import { GridLayoutContext } from './Articles.List.Context';

const authorQuery = graphql`
  {
    site: allSite {
      edges {
        node {
          siteMetadata {
            hero {
              welcome
              heading
              maxWidth
            }
          }
        }
      }
    }
  }
`;

const ArticlesHero: React.FC<IAuthor> = () => {
  const { gridLayout = 'tiles', hasSetGridLayout, setGridLayout } = useContext(GridLayoutContext);

  const results = useStaticQuery(authorQuery);
  const hero = results.site.edges[0].node.siteMetadata.hero;
  const tilesIsActive = hasSetGridLayout && gridLayout === 'tiles';

  return (
    <Section relative id="Articles__Hero">
      <HeadingContainer style={{ maxWidth: `${hero.maxWidth}px` }}>
        <HeroWelcome dangerouslySetInnerHTML={{ __html: hero.welcome }} />
        <Name.h1 />
        <HeroHeading dangerouslySetInnerHTML={{ __html: hero.heading }} />
      </HeadingContainer>
      <Horizontal />
    </Section>
  );
};

export default ArticlesHero;

const Horizontal = styled.div`
  position: relative;
  margin: 20px auto 20px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalNav};

  ${mediaqueries.tablet`
margin: 20px auto;
`}

  ${mediaqueries.phablet`
display: none;
`}
`;

const SubheadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;

  ${mediaqueries.desktop`
margin-bottom: 80px;
`};

  ${mediaqueries.tablet`
margin-bottom: 60px;
`};

  ${mediaqueries.phablet`
display: none;
`};
`;

const GridControlsContainer = styled.div`
  display: flex;
  align-items: center;

  ${mediaqueries.tablet`
display: none;
`};
`;

const HeadingContainer = styled.div`
  margin: 100px auto;
  padding-top: 100px;
  padding-bottom: 20px;
  position: relative;

  ${mediaqueries.desktop`
width: 95%;
`}

  ${mediaqueries.tablet`
width: 100%;
`}
`;

const HeroHeading = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 1.15;
    margin-top: 20px;
    color: ${p => p.theme.colors.primary};

    a {
    color: ${p => p.theme.colors.accent};
    }

    ${mediaqueries.desktop`
font-size: 32px
`}

    ${mediaqueries.phablet`
font-size: 26px;
`}

${mediaqueries.phone`
font-size: 24px;
`}
`;

const HeroWelcome = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 1.15;
color: ${p => p.theme.colors.primary};
font-family: ${p => p.theme.fonts.astigmatic};
margin-bottom: 20px;

a {
    color: ${p => p.theme.colors.accent};
}

${mediaqueries.desktop`
font-size: 32px
`}

${mediaqueries.phablet`
font-size: 26px;
`}

${mediaqueries.phone`
font-size: 24px;
`}
`;

/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import FolderLinks from '../FolderLinks';
import Logo from '../Logo';
import { Container, Explore, Chevron, Title, Profile, Link } from './styles';
import { pages, series } from './content';

function SideMenu({ isMenuOpen }) {
  const {
    tags: { group },
  } = useStaticQuery(
    graphql`
      query {
        tags: allMarkdownRemark {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `
  );
  const tags = group.map(({ tag }) => ({
    label: tag,
    url: `/tags/${kebabCase(tag.toLowerCase())}/`,
  }));

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Profile>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <h1>Code With Beer</h1>
          <Link to="/about">
            Ronaldo Santiago
            <span>(Developer)</span>
          </Link>
        </div>
      </Profile>
      <Explore>
        <Title>
          <Chevron />
          EXPLORE
        </Title>
        <FolderLinks title={pages.title} links={pages.links} />
        <FolderLinks title={series.title} links={series.links} />
        <FolderLinks title="Categories" links={tags} />
      </Explore>
    </Container>
  );
}

SideMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default SideMenu;

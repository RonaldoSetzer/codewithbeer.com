/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import FolderLinks from '../FolderLinks';
import Logo from '../Logo';
import { Container, Explore, Chevron, Title, Profile, Link } from './styles';
import { pages } from './content';

function SideMenu({ isMenuOpen }) {
  const {
    tags: { group: tagsGroup },
    categories: { group: categoriesGroup },
    site: {
      siteMetadata: { description, author },
    },
  } = useStaticQuery(
    graphql`
      query {
        tags: allMarkdownRemark {
          group(field: frontmatter___tags) {
            label: fieldValue
            totalCount
          }
        }
        categories: allMarkdownRemark {
          group(field: frontmatter___category) {
            label: fieldValue
            totalCount
          }
        }
        site {
          siteMetadata {
            description
            author
          }
        }
      }
    `
  );

  const tags = tagsGroup
    .filter(({ label }) => label)
    .map(({ label }) => ({
      label,
      url: `/tag/${kebabCase(label.toLowerCase())}/`,
    }));

  const categories = categoriesGroup
    .filter(({ label }) => label)
    .map(({ label }) => ({
      label,
      url: `/category/${kebabCase(label.toLowerCase())}/`,
    }));

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Profile>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <p>{description.replace(/\.\s/g, '. ')}</p>
          <Link to="/about">
            <strong>{author}</strong>
            <span>(Software Engineer)</span>
          </Link>
        </div>
      </Profile>

      <Explore>
        <Title>
          <Chevron />
          EXPLORE
        </Title>
        <FolderLinks title={pages.title} links={pages.links} />
        <FolderLinks title="Series" links={categories} />
        <FolderLinks title="Categories" links={tags} />
      </Explore>
    </Container>
  );
}

SideMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default SideMenu;

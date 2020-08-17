/* eslint react/no-unescaped-entities: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
import React, { useEffect } from 'react';
import Prism from 'prismjs';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import { MainContainer, MainContent, Line } from '../styles/base';
import PostTitle from '../components/PostTitle';
import Contacts from '../components/Contacts';
import Avatar from '../components/Avatar';

const code = `
  const me = {
    "name": "Ronaldo",
    "lastName": "Santiago",
    "nationality": "Brazilian",
    "address": {
      "country": "Brazil",
      "city": "Rio de Janeiro"
    },
    "favorite things": {
      "hobbies": [
        "ride a bike", "play guitar", "drawing/painting", "study languages",
        "longboard", "RPG", "Board Games", "Video Games", "watch Formula 1", "Animes"
      ],
      "games": [
        "Final Fantasy VI",
        "Chrono Trigger",
        "Super Mario RPG",
        "Legend of Zelda - A link to the past"
        ...
      ],
      "songs": [
        "The Police - Message in a Bottle",
        "Dire Stratis - Sultans of swring",
        "Foo Fighters - Everlong",
      ],
      "bands": ["Midnight Oil", "The Pillows", "Asian Kung fu Generation", "The Killers" ...]
      "beers": ["Dunkel", "Potter", "Weissbier"],
      "IDE": ["vim"],
    }
  }
`;

function AboutPage() {
  useEffect(() => {
    Prism.highlightAll();
  });

  const linkedin = 'https://www.linkedin.com/in/ronaldo-santiago/';

  return (
    <Layout>
      <GlobalStyles />
      <SEO title="About" />
      <MainContainer>
        <PostTitle title="About me" />
        <Avatar />

        <MainContent>
          <p>
            Hello World!! My name is &nbsp;
            <strong>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                Ronaldo Santiago
              </a>
            </strong>
            , I'm just a Software Engineer who wants to spend free time writing
            random things about life, the universe, and everything.
          </p>

          <p>Let's code a little about me :)</p>

          <div className="gatsby-highlight" data-language="text">
            <pre className="language-javascript">
              <code className="language-javascript">{code}</code>
            </pre>
          </div>

          <h4>Highlights Skills</h4>
          <ul>
            <li>Experience as FullStack (Frontend, Backend, Mobile).</li>
            <li>
              Experience with JavaScript Stack (Node, React, React Native).
            </li>
            <li>Experience with MicroServices.</li>
            <li>
              Years of experience with Oriented-Object, MVC, Design Patterns.
            </li>
            <li>Working experience with multidisciplinary teams.</li>
            <li>
              Agile methodologies, GitFlow, Code Reviews, Tests, Continuous
              Delivery, Mentoring.
            </li>
            <li>Currently, studying Functional Paradigm with Clojure.</li>
          </ul>

          <h4>Languages</h4>
          <ul>
            <li>Portuguese: Native.</li>
            <li>English: Advanced.</li>
            <li>German: Beginner.</li>
          </ul>

          <h4>Contacts</h4>
          <p>
            I'm available to talk on these platforms, just to the reminder,
            LinkedIn for business, and the others for random things.
          </p>

          <Contacts />

          <Line />
        </MainContent>
      </MainContainer>
    </Layout>
  );
}

export default AboutPage;

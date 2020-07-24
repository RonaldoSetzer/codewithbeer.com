/* eslint react/no-unescaped-entities: 0 */
/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import { MainContainer, MainContent, Line } from '../styles/base';
import PostTitle from '../components/PostTitle';
import Contacts from '../components/Contacts';

function AboutPage() {
  const linkedin = 'https://www.linkedin.com/in/ronaldo-santiago/';
  return (
    <Layout>
      <GlobalStyles />
      <SEO title="About" />
      <MainContainer>
        <PostTitle title="About me" />
        <MainContent>
          <p />
          <p>
            Hello World!! My name is &nbsp;
            <strong>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                Ronaldo Santiago
              </a>
            </strong>
            , I'm just a Brazilian Software Engineer who wants to spend my free
            time writing random things about life, the universe, and everything.
          </p>
          <p>
            Seriously, write about yourself is very hard. I have no idea what I
            have to write here. I became a developer just because of games, I
            already have worked as a game developer, but I had realized that
            there are a bunch of cool things beyond games. Today I'm curious, I
            just want to code anything. I've been working as a
            full-stack/T-Shaped developer with backend, mobile, frontend (my
            preference).
          </p>
          <p>
            The key to having a healthy life is keeping some time for hobbies. I
            love coding, playing games but, always when possible, I dedicate
            some moments to nontechnology hobbies, such as play the guitar,
            board games, ride a longboard, hike, drawing, paintings, study
            languages.
          </p>
          <p>
            Just a silly warning, English is not my native language, probably
            you will find some grammar mistakes here, don't worry, besides, one
            of the reasons to try to write this blog in English is because I
            want to reach more people and also, practice makes perfect.
          </p>

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
            <li>English: Advanced?</li>
            <li>German: Beginner.</li>
          </ul>
          <h4>Contacts</h4>
          <p>
            You can reach me through these platforms if you want to talk about
            the life, the universe, and everything, or just challenge me to a
            game.
          </p>
          <Contacts />
          <Line />
        </MainContent>
      </MainContainer>
    </Layout>
  );
}

export default AboutPage;

import { NextApiRequest, NextApiResponse } from 'next';

const feed = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
    data: [
      {
        slug: 'm1-macbook-air-after-1-month-of-development-19lo',
        upvoteCount: 0,
        title: 'M1 Macbook Air after 1 month of development',
        shortDescription:
          'After years of dreaming of buying the perfect laptop, I finally bought it, the new M1 Macbook Air(512GB SSD and 8GB RAM version). Great build, good keyboard, no fans(yet no thermal issues), fast, light, great screen, good speakers, and a battery that lasts a day. So far, everything about it was good.',
      },
      {
        slug: 'vue-firebase-google-easy-authentication-20ac',
        upvoteCount: 13,
        title: 'Vue + Firebase + Google == Easy Authentication',
        shortDescription:
          "I sometimes create youtube videos about things I'm working on, detailing how I did it - instead of a video, I'd like to share how you can use Firebase Auth to authenticate your users with Google!",
      },
      {
        slug: 'fast-connect-standalone-react-webrtc-application-2pa9',
        upvoteCount: 2987,
        title: 'Fast Connect - New online web conference platform',
        shortDescription:
          'This application is developed for creating fast and standalone video conferences without any registration.',
      },
      {
        slug: 'what-is-javascript-45a',
        upvoteCount: 3,
        title: 'What **is** JavaScript?',
        shortDescription:
          "We aren't going to get too technical here, but I wanted to give you a small intro to JavaScript and what, fundamentally, it ** is **. So make a hot chocolate, sit back and relax.",
      },
      {
        slug: 'the-spread-operator-in-javascript-35cm',
        upvoteCount: 223,
        title: 'The spread operator in Javascript',
        shortDescription:
          "When I first stumbled upon the ... operator it looked confusing and I didn't really know what to do with it. Javascript already had built in functions that were doing the exact same thing as this new operator so the need to integrate it in my code wasn't very clear to me. Today, after I used it for quite a while, it's one of my favorite ES6 features and it helps me manipulate arrays and strings much easier than before.",
      },
      {
        slug: 'handle-a-component-with-unknown-content-variants-b38',
        upvoteCount: 0,
        title: 'React Patterns: A Component with Many Content Variants',
        shortDescription:
          'A dumb component renders any text passed while its visual appearance remains static. It is also unknown how many new content variations are about to come. What would be a useful React pattern in this scenario?',
      },
      {
        slug: 'discourse-thread-integration-on-a-react-website-4369',
        upvoteCount: 77,
        title: 'Discourse thread integration on a React Website',
        shortDescription:
          'Discourse is an open-source civilised discussion forum and used by many Developer communities. Mozilla, Magic, Netlify, Auth0, MongoDB to name a few.',
      },
      {
        slug: 'how-to-build-a-password-generator-using-python-39gp',
        upvoteCount: 34,
        title: 'How to build a Password Generator using Python',
        shortDescription:
          'How do Password Generators work? Password Generators are nothing but simple programs which are capable of randomly creating strings which consist of alphabets, numbers & symbols.',
      },
    ],
    meta: {
      next: false,
    },
  });
};

export default feed;

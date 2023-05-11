import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  config = {
    baseHref: 'https://lexmihaylov.github.io'
  };

  renderParams<T>(viewData: T | Record<string, string>): T | Record<string, string> {
    const viewParams = {
      pageTitle: '',
      pageDescription: `Welcome to 'Just A Concept', where you'll find insights and tutorials on frontend development and JavaScript, as well as other topics related to software engineering. With a focus on best practices and clean code, this blog covers everything from React and Angular to Node.js and Databases. Whether you're a seasoned developer or just starting out, you'll find valuable information to help you improve your skills and stay up-to-date with the latest trends in web development. Join the community and discover how to build high-quality, performant web applications.`,
      keywords: 'JavaScript, React, Angular, Vue.js, Frontend development, Web development, HTML, CSS, UI/UX design, Responsive design, Progressive web apps (PWA), Web performance optimization (WPO), Browser compatibility, Typescript, Redux, Styled components, GraphQL, REST APIs, Node.js, Express, Webpack, Babel, NPM, Yarn, Git, Code quality, Test-driven development (TDD), Continuous integration/Continuous delivery (CI/CD), Tech tutorials, Best practices',
      image: this.baseUrlJoin('/images/logo.png'),
      type: 'website',
      cannonical: this.config.baseHref,
      url: this.config.baseHref,
      ...viewData,
    };

    if (!viewData['pageTitle']) {
      viewParams['pageTitle'] = 'Just A Concept';
    } else {
      viewParams['pageTitle'] = viewParams['pageTitle'] + ' (Just A Concept)';
    }

    return viewParams;
  }

  baseUrlJoin(url: string) {
    return (this.config.baseHref+ '//' + url).replace(/([^:])\/+/g, '$1/');
  }
}

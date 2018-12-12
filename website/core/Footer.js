/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="footer-links">
          <h3>Find more about GoodData.UI&nbsp;on</h3>
          <div className="social-buttons">
            <a href="https://github.com/gooddata/gooddata-react-components" target="_blank" className="social-button github">Github</a>
            <a href="https://stackoverflow.com/questions/tagged/gooddata" target="_blank" className="social-button stackoverflow">Stack Overflow</a>
            <a href="https://twitter.com/gooddata_dev" target="_blank" className="social-button twitter">Twitter</a>
            <a href="https://www.npmjs.com/package/@gooddata/react-components" target="_blank" className="social-button npm">NPM</a>
          </div>
        </section>
        <section className="copyright wrapper">
          Copyright &copy; 2007–{currentYear} GoodData Corporation. All Rights Reserved.
          Code licensed under a dual license - <a href="https://github.com/gooddata/gooddata-react-components/blob/master/LICENSE">CC BY-NC 4.0 for trial experience and GoodData.UI EULA for commercial use.</a>.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;

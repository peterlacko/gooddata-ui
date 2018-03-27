/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap" style={{textAlign: 'center'}}>
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <ul>
            <li><a href={this.docUrl('getting_started.html')}>Docs</a></li>
            <li><a href={this.docUrl('examples.html')}>Examples</a></li>
            <li><a href={this.docUrl('trouble_shooting.html')}>FAQ</a></li>
          </ul>
        </section>
        <section className="copyright">
          Copyright &copy; 2007–{currentYear} GoodData Corporation. All Rights Reserved
        </section>
      </footer>
    );
  }
}

module.exports = Footer;

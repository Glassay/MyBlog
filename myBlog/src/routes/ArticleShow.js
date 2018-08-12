/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/03/31        Cheng Jifeng
 */

import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import {
  Header,
  Segment,
  Divider,
  Label,
} from 'semantic-ui-react';
import AOS from 'aos';
import { connect } from 'dva';

import 'aos/dist/aos.css';
import '../utils/atom.less';
import styles from './ArticleShow.less';
import colors from '../utils/colors';

class ArticleShow extends React.Component {
  constructor() {
    super();
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: true,
      sanitize: true,
      tables: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      highlight: code => highlight.highlightAuto(code).value,
    });
  }
  componentDidMount() {
    AOS.init({
      duration : 1000
    })
    this.node.scrollIntoView();
  }
  render() {
    const { Article, keys } = this.props;
    return (
      <div ref={node => (this.node = node)} className={styles.bgImage}>
        {
          Article.data === undefined ? null :
          <div data-aos='zoom-in'>
            <Segment style={{ width: '80%', minHeight: '100vh', margin: 'auto', opacity: 0.95, backgroundColor: '#FBFBEA', paddingBottom: 100 }}>
              <Header>{Article.data[keys].Title}</Header>
              <div>
                <Label as="a" color={colors[Math.floor(Math.random() * colors.length)]} tag>{Article.data[keys].Label1}</Label>
                <Label as="a" color={colors[Math.floor(Math.random() * colors.length)]} tag>{Article.data[keys].Label2}</Label>
              </div>
              <Divider horizontal>{Article.data[keys].Created.substring(0,10)}</Divider>
              <div dangerouslySetInnerHTML={{ __html: marked(Article.data[keys].Content) }} />
            </Segment>
          </div>
        }
      </div>
    );
  }
}

export default connect(({ article }) => ({
  ...article,
}))(ArticleShow);

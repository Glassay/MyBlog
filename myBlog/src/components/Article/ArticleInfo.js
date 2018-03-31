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
import { connect } from 'dva';
import { Card, Header, Image, Label, Button, Icon } from 'semantic-ui-react';

import styles from './ArticleInfo.less';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';
import images from '../../utils/images';

class ArticleInfo extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    });
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value,
    });
  }
  readArticles = (id) => { // eslint-disable-line
    this.props.dispatch({
      type: 'article/readMore',
      payload: id,
    });
  }
  render() {
    const { Article, loading } = this.props;
    console.log('loading>>>>>', loading);
    return (
      <Card.Group>
        {
          Article.data === undefined ? null : Article.data.map((item, index) => (
            <Card
              fluid
              key={index}
              className="sr"
            >
              <Image
                style={{ height: 250 }}
                src={images.headImage[Math.floor(Math.random() * images.headImage.length)]}
              />
              <Card.Content>
                <Header>{item.Title}</Header>
                <div className={styles.type}>
                  <div>
                    <Label as="a" color="blue" tag>{item.Label1}</Label>
                    <Label as="a" color="violet" tag>{item.Label2}</Label>
                  </div>
                  <div>
                    <Icon name="calendar" />
                    <span>2018-01-02</span>
                  </div>
                </div>
                <hr />
                <div>{item.Brief}</div>
                <Button
                  content="阅读全文"
                  color="black"
                  style={{
                    float: 'right',
                  }}
                  onClick={() => this.readArticles(index)}
                />
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    );
  }
}

export default connect(state => ({
  Article: state.article.Article,
  loading: state.loading.models.article,
}))(ArticleInfo);
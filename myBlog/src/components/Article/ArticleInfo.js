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
  Card,
  Header,
  Image,
  Button,
  Divider,
} from 'semantic-ui-react';
// import ScrollReveal from 'scrollreveal';

import styles from './ArticleInfo.less';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';
import images from '../../utils/images';

class ArticleInfo extends React.Component {
  componentWillMount() {
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value,
    });
  }
  componentDidMount() {
    // const config = {
    //   reset: false, // 滚动鼠标时，动画开关
    //   origin: 'left', // 动画开始的方向
    //   duration: 1000, // 动画持续时间
    //   delay: 0, // 延迟
    //   rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
    //   opacity: 0, // 初始透明度
    //   scale: 0.2, //缩放
    //   easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', // 缓动'ease', 'ease-in-out'，'linear'
    // }
    // ScrollReveal().reveal(this.refs.box1, config)
  }

  handleArticleID = (id) => {
    this.props.ArticleId(id)
  }

  render() {
    return (
      <Card
        fluid
        key={this.props.index}
        // ref='box1'
      >
        <Image
          style={{ height: 250 }}
          src={images.headImage[Math.floor(Math.random() * images.headImage.length)]}
        />
        <Card.Content>
          <Header>{this.props.Title}</Header>
          <Divider horizontal>{this.props.Created.substring(0,10)}</Divider>
          <div className={styles.briefInfo}>{this.props.Brief}</div>
          <Button
            content="阅读全文"
            size="small"
            color="black"
            style={{
              float: 'right',
              padding: 10,
              marginTop: 15,
            }}
            onClick={() => this.handleArticleID(this.props.index)}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default ArticleInfo;

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
import { Card, Image, Icon } from 'semantic-ui-react';

import styles from './Introduce.less';

class Indroduce extends React.Component {
  render() {
    return (
      <Card>
        <Image
          src="http://p8pobg42e.bkt.clouddn.com/blog/image/blog-avatar.jpeg"
        />
        <Card.Content>
          <Card.Meta>
            缘,妙不可言！
          </Card.Meta>
          <Card.Content style={{ marginTop: 10 }}>
            <div className={styles.info}>
              <Icon className="google" />
              <em className={styles.email}>chengjifeng0215@gmail.com</em>
            </div>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default Indroduce;

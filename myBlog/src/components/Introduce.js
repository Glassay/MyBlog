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

class Indroduce extends React.Component {
  render() {
    return (
      <Card>
        <Image
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522053615038&di=ea0660047ab07665c0c710d656bc9edd&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F12%2F20151112214424_RLGdi.jpeg"
        />
        <Card.Content>
          <Card.Meta>
            缘,妙不可言！
          </Card.Meta>
          <Card.Content
            style={{ marginTop: 10 }}
          >
            <Icon className="mail outline" />
            chengjifeng0215@163.com
          </Card.Content>
          <Card.Content
            style={{ marginTop: 10 }}
          >
            <Icon className="google" />
            chengjifeng0215@gmail.com
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default Indroduce;

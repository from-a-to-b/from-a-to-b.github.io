import React, { Component } from 'react'
import { FullContainer, Column } from '../stylesheets/components';

export default class Credits extends Component {
  render() {
    return (
      <FullContainer>
        <Column>
          <p>
            Credits<br/>
            From Point A to Point B is by <a href="https://scalarvectortensor.net/" target="_blank">Achim Koh</a> and <a href="https://wonyoung.so" target="_blank">Wonyoung So</a>. It was made for, exhibited at and supported by <a href="http://2019.datathroughdesign.com/" target="_blank">Data Through Design 2019</a>.
          </p>
        </Column>
      </FullContainer>
    )
  }
}

import React from 'react'
import css from 'Css2/footer'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    let disableStyle = {cursor: 'not-allowed', opacity:'.5'}
    return (
      <div className={css.container}>
        <div className={css.content}>
          <ul className={css.list}>
            {list.map(item => (
              <li key={item.name}><a style={item.disable?disableStyle:{}}  href={item.href}>{item.name}</a></li>
            ))}
          </ul>
          <div className={css.line}/>
          <div className={css.bottom}>
            <div className={css.leftContent}>
              <img src={require('Image3/logo-22.png')} alt=""/>
              <div>
                <span>用户QQ群：738740964</span>
                <span>邮箱：support@ciniuwang.com</span>
              </div>
            </div>
            <div className={css.rightContent}>
              <div>
                <span>沪ICP备18021028号-1</span>
                <span>© 2018-2020上海冲南智能科技有限公司及其许可人。版权所有</span>
              </div>
              <span>使用条款  |  隐私政策</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const list = [
  { name: 'FAQ', disable: true},
  { name: '下载', disable: false, href: 'http://www.ciniuwang.com/files/词牛客户端.zip'},
  { name: '联系销售', disable: true},
  { name: '联系我们', disable: true}
]


export default Footer
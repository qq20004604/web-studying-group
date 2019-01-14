import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Page extends React.Component {
    state = {
        acc: '',    // 账号
        pw: '',     // 密码
        code: '',    // 验证码

        // 验证码图片
        signImg: '123.png',

        // 标记
        signCode: true,        // 验证码标记（是否显示）
    }

    render() {
        return <div>
            <h2>登录</h2>
            {/* 账号 */}
            <div className='row'>
                <label className='label'>
                    <span className='left'>账号</span>
                    <span className='right'><input type="text" placeholder='请输入账号' className='input'/></span>
                </label>
            </div>

            {/* 密码 */}
            <div className='row'>
                <label className='label'>
                    <span className='left'>密码</span>
                    <span className='right'><input type="password" placeholder='请输入密码' className='input'/></span>
                </label>
            </div>

            {/* 验证码 */}
            {
                this.state.signCode ? <div className='row'>
                    <label className='label'>
                        <span className='left'>验证码</span>
                        <span className='right'>
                            <input type="text" placeholder='请输入验证码' className='code-input'/>
                            <img src={this.state.signImg} className='code-img' alt=""/>
                        </span>
                    </label>
                </div> : null
            }

            {/* 提交按钮 */}
            <div className='row'>
                <label className='label'>
                    <button className='btn'>提 交</button>
                </label>
            </div>
        </div>
    }
}

ReactDOM.render(
    <div>
        <Page/>
    </div>,
    document.getElementById('root')
);
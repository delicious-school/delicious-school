import React from 'react';

class Hello extends React.Component {
    render() {
        return (<div>
            <form>
                用戶名：
                <input className="logIn" type="text"/>
                密碼：
                <input className="password" type="password"/>
                <button className="log" href="http://localhost:3000/#/?_k=5qk">登陸</button>
                <button className="reset">重置</button>
            </form>
            </div>)
    }
}

class Main extends React.Component {
    render() {
        return (
            <div><a classID="log-1" href="http://localhost:3000/#/index?_k=tdgnuq">登陸</a>
                <a classID="log-1" href="">注册</a>
            </div>
        );

    }
}

export default {Hello,Main};
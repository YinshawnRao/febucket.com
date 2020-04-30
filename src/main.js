import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>                
                <a href="http://www.beian.miit.gov.cn" target="_blank">粤ICP备19151854号</a>
            </Footer>
        </Layout>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
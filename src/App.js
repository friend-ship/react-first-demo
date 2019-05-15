import React from 'react';
import RouterIndex from './router/index';
import MainHeader from './view/main-header';
import MainFooter from './view/main-footer';
import 'antd/dist/antd.css';
import './view/index.css';
function App() {
    return (
        <div className="pageWrap">
            <MainHeader></MainHeader>
            <main className="main">
                <RouterIndex />
            </main>
            <MainFooter></MainFooter>
        </div>
    )
}

export default App;
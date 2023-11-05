import { Tabs } from './component/tabs';
import './app.css';

function App() {
    return (
        <div className="tabs-container">
            <Tabs>
                <div className="flex">
                    <Tabs.Tab label="a">A 區</Tabs.Tab>
                    <Tabs.Tab label="b">B 區</Tabs.Tab>
                    <Tabs.Tab label="c">C 區</Tabs.Tab>
                </div>
                <Tabs.Panel label="a">A 區的內容</Tabs.Panel>
                <Tabs.Panel label="b">B 區的內容</Tabs.Panel>
                <Tabs.Panel label="c">C 區的內容</Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default App;

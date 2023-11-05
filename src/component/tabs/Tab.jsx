import { useTabs } from './Tabs';
import './Tab.css';

export const Tab = (props) => {
    const { activeTab, setActiveTab } = useTabs();
    return (
        <div className={`tab ${activeTab === props.label ? 'active' : ''}`}>
            <button onClick={() => setActiveTab(props.label)}>
                {props.children}
            </button>
        </div>
    );
};

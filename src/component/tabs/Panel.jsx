import { useTabs } from './Tabs';
import './Panel.css';

export const Panel = (props) => {
    const { activeTab } = useTabs();
    return activeTab === props.label ? (
        <div className="panel">{props.children}</div>
    ) : null;
};

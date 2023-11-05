import { useState, useMemo, useContext, createContext } from 'react';
import { Tab } from './Tab';
import { Panel } from './Panel';

const TabContext = createContext(undefined);

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('a');

    const memoizedContextValue = useMemo(
        () => ({
            activeTab,
            setActiveTab,
        }),
        [activeTab, setActiveTab]
    );

    return (
        <TabContext.Provider value={memoizedContextValue}>
            {props.children}
        </TabContext.Provider>
    );
};

export const useTabs = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('該組件必須包在 <Tabs> 裡面');
    }
    return context;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };

import { Tab, TabsContainer } from "./tabs.styles";

const Tabs = ({tabNames}) => {

    const tabClickHandler = () => {
        
    }

    return (
        <TabsContainer>
            {
                tabNames.map((tabName, idx) => {
                    return (
                        idx === 0
                        ? <Tab key={idx} isSelected={true}>{tabName}</Tab>
                        : <Tab key={idx} isSelected={false}>{tabName}</Tab>
                    )
                })
            }
        </TabsContainer>
    )
}

export default Tabs;
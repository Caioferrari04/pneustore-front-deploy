import { useState } from "react";
import styles from './Tabs.module.scss';

const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }
    return (
        <div className={styles.entrega}>
          <ul className={styles.tabs}>
            {children.map((tab)=>(
                <li className={tab.props.label == activeTab ? styles.current : (styles.stand)} 
                key={tab.props.label}> 
                
                <a className={styles.link} href="#" onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
                
                </li>
            ))} 
          </ul>
                {children.map((one) =>{
                  if (one.props.label == activeTab)
                    return( 
                      <div key={one.props.label} className={styles.content}>
                        {one.props.children}
                      </div>
                    );
                  }
                  )
                }
            
        </div>
    );

};

export default Tabs; 

import './App.css';
import Header from './components/Header';
import Item   from './components/Item';
import Accesories from './assets/accessories.jpg';
import ModelS from './assets/model-s.jpg';
import ModelX from './assets/model-x.jpg';
import ModelY from './assets/model-y.jpg';
import Model3 from './assets/model-3.jpg';
import solarPanel from './assets/solar-panel.jpg';
import solarRoof from './assets/solar-roof.jpg';


function App() {
  return (
    <div className="App">
    <Header/>    
     {/* <h1>Hello Ryzen</h1> */}
      <div className="app_itemsContainer">
      <Item
      title='Lowest Cost Solar in American'
      desc='Money-back guarantee'
      descLink=''
      backgroundImg={solarPanel}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      first
      />
      
      <Item
      title='Model S'
      desc='$69,458'
      descLink=''
      backgroundImg={ModelS}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      />

<Item
      title='Model X'
      desc='$70,458'
      descLink=''
      backgroundImg={ModelX}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      />


<Item
      title='Model Y'
      desc='$80,458'
      descLink=''
      backgroundImg={ModelY}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      />


<Item
      title='Model 3'
      desc='$80,458'
      descLink=''
      backgroundImg={Model3}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      />

<Item
      title='Accesories'
      desc='$25,458'
      descLink=''
      backgroundImg={Accesories}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      />

<Item
      title='Solar Roof'
      desc='$30,458'
      descLink=''
      backgroundImg={solarRoof}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='Learn More'
      rightBtnLink =''
      twoButtons='true'
      />



      </div>    
    </div>
  );
}

export default App;

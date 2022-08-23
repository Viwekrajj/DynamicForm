import logo from './logo.svg';
import './App.css';
import drug1 from './drug1.json'
import drug2 from './drug2.json'

import CustomInput from './CustomInput';

function App() {
 
  return (
    <div className="App">

     <h1>Drug1</h1>

      {drug1.fields.map((data, index) => {
        return (<CustomInput 
          lable={data?.label} 
          items={data?.items}
          key={data?.key} 
          isRequired={data?.isRequired} 
          order={data?.order}
          isReadonly={data?.isReadonly}
          type={data?.type} />)

      })}
      <h1>Drug2</h1>

{drug2.fields.map((data, index) => {
  return (<CustomInput 
    lable={data?.label} 
    items={data?.items}
    key={data?.key} 
    isRequired={data?.isRequired} 
    order={data?.order}
    isReadonly={data?.isReadonly}
    type={data?.type} />)

})}
    </div>
  );
}

export default App;

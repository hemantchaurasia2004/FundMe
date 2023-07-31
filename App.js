import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
    const loadProvider = async()=>{
      console.log(window.web3);
      console.log(window.ethereum);
    };
    loadProvider();
  },[]); 
  return (
    <>
    <div class="card text-center">
      <div class="card-header">Funding</div>
      <div class="card-body">
        <h5 class="card-title">Balance: 20 ETH </h5>
        <p class="card-text">Account : 0x0000000000</p>
        <button type="button" class="btm btm-success">
          Connect to metamask 
        </button>
        &nbsp;
        <button type="button" class="btn btn-success ">
          Transfer
        </button>
        &nbsp;
        <button type="button" class="btn btn-primary ">
          Withdraw
        </button>
      </div>
      <div class="card-footer text-muted">Code Eater</div>
    </div>
  </>
  );
}

export default App;

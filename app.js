import abi from "./abi.js";
import openTab from "./tab.js";
const { ethers: etherjs } = ethers;

const rpcUrl = "https://goerli.infura.io/v3/ba80361523fe423bb149026a490266f0";
const signerProvider = new etherjs.providers.Web3Provider(window.ethereum);

const provider = new etherjs.providers.JsonRpcProvider(rpcUrl);

const signer = signerProvider.getSigner();
const tokenAddress = "0xC770d227Eb937D7D3A327e68180772571C24525F";

const useContract = (
  address = tokenAddress,
  contractAbi = abi,
  isSigner = false
) => {
  const providerSigner = new etherjs.providers.Web3Provider(window.ethereum);
  const signer = providerSigner.getSigner();
  const provider = new etherjs.providers.JsonRpcProvider(rpcUrl);
  const newProvider = isSigner ? signer : provider;
  return new ethers.Contract(address, contractAbi, newProvider);
};

// view functions
// new ethers.Contract(address, abi, provider)

//state  mutating functions
// new ethers.Contract(address, abi, signer)

const connectWallet = async () => {
  await signerProvider.send("eth_requestAccounts");
  await getUserWallet();
};

const getUserWallet = async () => {
  let userAddress = await signer.getAddress();
  //   connectedWallet = userAddress;
  updateUserAddress(userAddress);
  //   console.log(connectedWallet, "connected wallet");
};

export default {
  openTab,
};

// elements
// const button = document.getElementById("connectBtn");
// const userAddress = document.getElementById("userAddress");

// Event Listeners
connectBtn.addEventListener("click", connectWallet);

function updateUserAddress(address) {
  userAddress.innerText = address;
}

function tokenTemplateUpdate(name, symbol, totalSupply, userBalance) {
  return `<div class="flex justify-between items-center">
    <div>
        <div class="flex items-center">
            <div class="p-2 token-thumbnail w-10 h-10"> 
                <img src="https://bafybeiekvvr4iu4bqxm6de5tzxa3yfwqptmsg3ixpjr4edk5rkp3ddadaq.ipfs.dweb.link/" alt="token-img" />  </div>
            <div>
                <p class="font-semibold">${name} - ${symbol} </p>
                <p>Total Supply:${totalSupply}</p>
            </div>
        </div>
    </div>
    <div>${userBalance}</div>
</div>`;
}

async function getTokenDetails() {
  await connectWallet();
  loader.innerText = "Loading...";
  const token = await useContract(tokenAddress, abi);
  let userAddress = await signer.getAddress();

  try {
    const [name, symbol, totalSupply, userBalance] = await Promise.all([token.name(), token.symbol(), token.totalSupply(), token.balanceOf(userAddress)]);
    return { name, symbol, totalSupply: Number(totalSupply), userBalance };
  } catch (error) {
    errored.innerText = "Error Occurred!";
    console.log("error occurred", error);
  } finally {
    loader.innerText = "";
  }
}

async function InitData() {
  const { name, symbol, totalSupply, userBalance } = await getTokenDetails();
  const template = tokenTemplateUpdate(name, symbol, totalSupply / 10 ** 18, `${userBalance / 10 ** 18} ${symbol}`);
  token.innerHTML = template;
}


InitData();

// tokenDetails();

/***
 * @amt - Number
 * @receiver - string
 **/
async function sendToken(address, amt) {
  const contract = useContract(tokenAddress, abi, true);
  // console.log(contract);
  // const amount = new etherjs.utils.parseEthers();
  const decimal = await getDecimals();
  const parseUnit = new etherjs.utils.parseUnits(amt, decimal);
  const txn = await contract.transfer(address, parseUnit);
  console.log(txn, "transaction pending....");
  sendTransaction.innerText = "Sending";
  window.alert(`transaction pending....`);
  const confirm = await txn.wait();
  console.log("transaction ends", confirm);
  window.alert(`${amt} CLT sent to ${address}`);
  sendTransaction.innerText = "Send";
}

async function getDecimals() {
  return await useContract().decimals();
}

sendTransaction.addEventListener("click", async () => {
  const amount = amt.value;
  const receiverAddress = receiver.value;
  console.log(amount, receiverAddress);

  await sendToken(receiver.value, amt.value);
});

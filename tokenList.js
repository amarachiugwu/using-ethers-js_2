// https://github.com/Uniswap/token-lists/blob/main/test/schema/example.tokenlist.json
const list = {
  name: "My Token List",

  tokens: [
    // rinkeby tokens
    {
      chainId: 4,
      address: "0x7637953dbE16f94647F12897644FCc4b1b3F2354",
      symbol: "TT1",
      name: "TestToken1",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmcpWAko6mkFB1r5kgVjNCnh7EY9PwTn4oi4F86av6eo1E/",
      tags: ["shitcoin"],
    },
    {
      chainId: 4,
      address: "0xd07C703243092887C2970eb13Db8c0079dC5e3D4",
      symbol: "TT2",
      name: "TestToken2",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmTxKFnEEYAYRZ6ZLfECefHYJoVbdQXMtfaS21y3v52ELt/",
      tags: ["shitcoin"],
    },
    {
      chainId: 4,
      address: "0x812b8EEb7F94D5867420A7D8298E3EA0dD7C3014",
      symbol: "TT3",
      name: "TestToken3",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmTjwW3qQPfyh5TDAHRvDRLuWcx4u76hoywFznjBWSnvc1/",
      tags: ["shitcoin"],
    },
    {
      chainId: 4,
      address: "0x13800E8cD613F29aae41c4498889Df47E1312366",
      symbol: "TT4",
      name: "TestToken4",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmPdHdch33gPVgYtVkwKsFMfHCTj2VWt1qPcHJQB3qaZ5q/",
      tags: ["shitcoin"],
    },
    {
      chainId: 4,
      address: "0xe8aC99B07F4122b8C4c78f8f5dF0a885F9F2B512",
      symbol: "TT5",
      name: "TestToken5",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmNR3vbEgzB8xuajC1WE41zrLcdi23VhkswzzW3eTGRqhw/",
      tags: ["shitcoin"],
    },
    

    // kovan tokens
    {
      chainId: 42,
      address: "0x348aCbCa8E29BB0789135a3801253eFB936BfC1A",
      symbol: "TT1",
      name: "TestToken1",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmcpWAko6mkFB1r5kgVjNCnh7EY9PwTn4oi4F86av6eo1E/",
      tags: ["shitcoin"],
    },
    {
      chainId: 42,
      address: "0x813698d5B01d766FBc0e8A2170e940e7005EAd92",
      symbol: "TT2",
      name: "TestToken2",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmTxKFnEEYAYRZ6ZLfECefHYJoVbdQXMtfaS21y3v52ELt/",
      tags: ["shitcoin"],
    },
    {
      chainId: 42,
      address: "0x27e860C404c56f390d36eF1775Dc1213A2E98fF4",
      symbol: "TT3",
      name: "TestToken3",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmTjwW3qQPfyh5TDAHRvDRLuWcx4u76hoywFznjBWSnvc1/",
      tags: ["shitcoin"],
    },
    {
      chainId: 42,
      address: "0x2b5E53dEf9612Fdd447d2224F1C759F8f5988584",
      symbol: "TT4",
      name: "TestToken4",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmPdHdch33gPVgYtVkwKsFMfHCTj2VWt1qPcHJQB3qaZ5q/",
      tags: ["shitcoin"],
    },
    {
      chainId: 42,
      address: "0xb7Dd2D6f2ed70a37e71b0a46679430DA727c0647",
      symbol: "TT5",
      name: "TestToken5",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmNR3vbEgzB8xuajC1WE41zrLcdi23VhkswzzW3eTGRqhw/",
      tags: ["shitcoin"],
    },


    // goerli tokens
    {
      chainId: 5,
      address: "0x348aCbCa8E29BB0789135a3801253eFB936BfC1A",
      symbol: "TT1",
      name: "TestToken1",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmcpWAko6mkFB1r5kgVjNCnh7EY9PwTn4oi4F86av6eo1E/",
      tags: ["shitcoin"],
    },
    {
      chainId: 5,
      address: "0x813698d5B01d766FBc0e8A2170e940e7005EAd92",
      symbol: "TT2",
      name: "TestToken2",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmTxKFnEEYAYRZ6ZLfECefHYJoVbdQXMtfaS21y3v52ELt/",
      tags: ["shitcoin"],
    },
    {
      chainId: 5,
      address: "0x27e860C404c56f390d36eF1775Dc1213A2E98fF4",
      symbol: "TT3",
      name: "TestToken3",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmTjwW3qQPfyh5TDAHRvDRLuWcx4u76hoywFznjBWSnvc1/",
      tags: ["shitcoin"],
    },
    {
      chainId: 5,
      address: "0x2b5E53dEf9612Fdd447d2224F1C759F8f5988584",
      symbol: "TT4",
      name: "TestToken4",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmPdHdch33gPVgYtVkwKsFMfHCTj2VWt1qPcHJQB3qaZ5q/",
      tags: ["shitcoin"],
    },
    {
      chainId: 5,
      address: "0xb7Dd2D6f2ed70a37e71b0a46679430DA727c0647",
      symbol: "TT5",
      name: "TestToken5",
      decimals: 18,
      logoURI:
        "https://gateway.pinata.cloud/ipfs/QmNR3vbEgzB8xuajC1WE41zrLcdi23VhkswzzW3eTGRqhw/",
      tags: ["shitcoin"],
    },
  ],
};

export default list;

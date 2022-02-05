require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note often company install forum equal gentle'; 
let testAccounts = [
"0x06a768fd2201b895639d0e94ae284732f3c60b124be814a9e5c385d894397483",
"0xd3130cb77edfb4cfeadb023f1e00da2e5dbe6f62961e9d5c001d14d34462fefb",
"0xd85e87c6a22c511af58aa5054e5d9e37e886ba78991b118194cee70160e4074e",
"0x40fa2d50d65a206fb0a389725e1ed2cf2bedf23fabc27683989cb6f02c988fb0",
"0x107872a6e15a791885ec967faecb2e38bb48f44df64b72cef2f3544bf77f65d0",
"0x2d4a9ac853bd83e2e8a956ca5502d4a0d4679831bfb8a4a5886be9ed37f22631",
"0xbb60827335d6750a1d292464bb3efac27f56ce2b02de86e82fbb8317724ff6e4",
"0x8914b35c0d186546b3410de326510b90735c569ad394b61f29acc1cdef8eaf50",
"0x96ab68039669d836b2007cd32414dd17488aff1b1eb3ebb5191b930472e7afe0",
"0x12ecad6cb4194a47a43f453a10ab0bf05ba911119796bc3b37e8a1195e88449d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


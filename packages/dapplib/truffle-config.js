require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth museum coach half enter blue giggle'; 
let testAccounts = [
"0x9a99698dfdeda9237a716151f82ae610f9082ba8ab91ff72db8d1d68f2e1f58f",
"0x0089192b5d373a5e2bdbf2e470326bd18b3f9bb9a3a632e052c2a600b4d30c2e",
"0x06ce4ec81b4f26584236c2b4bf0207d9bafc449150885893212d6f1b530239f6",
"0x5ef8c49e93905af3571e49b8583ec1a2cd8468a36189fc42d89756a7c93ac1b0",
"0xfb69c6e91f16df2a881774a67028cb64d30ada1b791677c45074fc3c996cb994",
"0x003cc75a8b482a262b486096986ff424976974ab908a77ea5dbfc32847894cb3",
"0xa443603b678001d4264503822ce8e13cbd74a13bee799a46a162fa9e10f55d6b",
"0xdc86ce5e35cb82ac8dd9a039021ac4561d716cca98ca5fbf4660432115bba809",
"0xa3241daca301382f0747511a1407602e9658213cad2e594c0e10f141489e181e",
"0x66ebc5b6e737fbf7936fbd2a5eedca24cc01da8e81e9c3ccd22b2655029c6c6c"
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
            version: '^0.5.11'
        }
    }
};

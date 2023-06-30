import React from 'react';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

const WalletConnectButton = () => {
    const handleConnect = async () => {
        const provider = new WalletConnectProvider({
            rpc: {
                80001: 'https://rpc-mumbai.maticvigil.com',
            },
        });

        await provider.enable();

        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const signer = ethersProvider.getSigner();

        const address = await signer.getAddress();
        const balance = await signer.getBalance();

        console.log('Address:', address);
        console.log('Balance:', ethers.utils.formatEther(balance));
    };

    return (
        <button className="walletConnectButton" onClick={handleConnect}>
            Connect with WalletConnect
        </button>
    );
};

export default WalletConnectButton;

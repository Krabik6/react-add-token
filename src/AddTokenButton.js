import React from 'react';
import { useState } from 'react';

const AddTokenButton = () => {
    const [result, setResult] = useState('');

    const requestAccount = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    };

    const addToken = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await requestAccount();

                const tokenAddress = '0xDe052adf637330f7A9207f2423d9EE17a0452Adf';
                const tokenSymbol = 'USDT';
                const tokenDecimals = 18;
                const tokenImage =
                    'https://salmon-retail-leopard-422.mypinata.cloud/ipfs/QmYZjAmuQE29w7m8ftPUJU5yVciLKD8wB8uQZsd5NRPeUC?_gl=1*e716t2*rs_ga*NDQ2OTc1Nzc0LjE2ODY4NDI4MjE.*rs_ga_5RMPXG14TE*MTY4Njg0MjgyMS4xLjEuMTY4Njg0Mjk2Ny4xMS4wLjA';

                const wasAdded = await window.ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: tokenAddress,
                            symbol: tokenSymbol,
                            decimals: tokenDecimals,
                            image: tokenImage,
                        },
                    },
                });

                if (wasAdded) {
                    setResult('Thanks for your interest!');
                } else {
                    setResult('Your loss!');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="addTokenButton">
            <button className="addTokenButton__button" onClick={addToken}>
                Add Token
            </button>
            <p className="addTokenButton__result">{result}</p>
        </div>
    );
};

export default AddTokenButton;

import React, {useState} from 'react';
import  {ethers, BigNumber} from 'ethers';
import KondwaNFT from './KondwaNFT.json';
import { Box, Button, Container, Heading, HStack, Input, Stack } from '@chakra-ui/react';

const kondwaNFTaddress = "0xE5Cd06fc3F472A3642D1F65Ef195B3F15079047f";
const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAccount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                kondwaNFTaddress,
                KondwaNFT.abi,
                signer
            );
            try{
                const res = await contract.mint(BigNumber.from(mintAccount));
                console.log('response', res);
            }catch(err){
                console.log('error:', err);
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAccount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAccount(mintAmount + 1)
    }

  return (
      <Box>
          <Container  maxWidth="container.xl">
            <Box d="flex" alignItems="center" py="20" flexDirection='column' >
                <Heading>Kondwani NFTs</Heading>
                {isConnected ? (
                    <Box>
                        <HStack spacing={3}>
                            <Button onClick={handleDecrement}>-</Button>
                            <Input type="number" value={mintAmount}/>
                            <Button onClick={handleIncrement}>+</Button>
                        </HStack>
                        <Button mt={3} onClick={handleMint}>Mint Now</Button>
                        
                    </Box>
                ) : (
                    <Container maxW="container.xl" >
                        <Box d="flex" alignItems="center" py="20" flexDirection='column'>
                            You are connected to mint KondwaNg tokens
                        </Box>
                    </Container>
                )}
            </Box>
        </Container>
      </Box>
        
  )
}

export default MainMint
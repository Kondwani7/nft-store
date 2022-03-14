import React from 'react'
import { Box, Button, HStack } from '@chakra-ui/react';
const Navbar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.etherum){
            const accounts = await window.etherum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
  return (
      <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6} mb={5} mt={2}>
        {/*left hand navigation*/}
        <HStack>
            <Box>Logo</Box>
            <Box>twitter</Box>
            <Box>email</Box>
        </HStack>

        {/*right hand side nav */}
        <HStack>
            <Box>About us</Box>
            <Box>Mint</Box>
            <Box>github</Box>
        </HStack>
        
        {/*connect button*/}
        <HStack>
            <Box>
                {isConnected ? (
                    <p>Connected</p>
                ): (
                    <Button onClick={connectAccount}>Connect</Button>
                )}
            </Box>
        </HStack>
        
      </Box>
  )
}

export default Navbar
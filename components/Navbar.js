import React from 'react'
import {Icon, Box, Button, HStack, Link } from '@chakra-ui/react';
import{FiHome} from 'react-icons/fi'
import { MdOutlineEmail } from "react-icons/md";
import { VscTwitter, VscGithub } from "react-icons/vsc";

const Navbar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

  return (
      <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6} mb={5} mt={2}>
        {/*left hand navigation*/}
        <HStack>
            <Link href='/' color="#183660" fontWeight="normal" fontSize="xl">
                <Icon mr={3} as={FiHome} fontSize="2xl" color="#183660" fontWeight="normal"/>
            </Link>
            <Link href='https://twitter.com/Kondwani_G' color="#183660" fontWeight="normal" fontSize="xl">
                <Icon mr={3} as={VscTwitter} color="#183660" fontWeight="normal" fontSize="2xl"></Icon>
            </Link>
            <Link href='https://github.com/kondwani7' color="#183660" fontWeight="normal" fontSize="xl">
                <Icon as={VscGithub} mr={3} color="#183660" fontWeight="normal" fontSize="2xl"></Icon>
            </Link>
            <Link>
                <Icon as={MdOutlineEmail} color="#183660" fontWeight="normal" fontSize="2xl"></Icon>
            </Link>
        </HStack>
        
        {/*connect*/}
                {isConnected ? (
                    <p>Connected</p>
                ): (
                    <Button colorScheme='blue' onClick={connectAccount}>Connect</Button>
                )}
        
      </Box>
  )
}

export default Navbar
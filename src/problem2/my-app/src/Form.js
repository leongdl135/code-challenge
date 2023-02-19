import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Center,
    HStack,
    PinInput,
    PinInputField,
    useToast,
  CircularProgress,
  CircularProgressLabel,
  } from '@chakra-ui/react';
import React from 'react';
  
import { FiUser, FiDollarSign, FiLock } from "react-icons/fi";

import { useState, useEffect } from 'react';

  
  const Form = () => {
    const [ethAddress, setEthAddress] = useState('');
    const [amountToSend, setAmountToSend] = useState('');
    const [OTP, setOTP] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    const handleSendTokensClick = async () => {
        if (!ethAddress || !amountToSend || !OTP) {
        toast({
            title: 'Please fill out all fields!',
            status: 'error',
            duration: 3000,
            isClosable: true,
        });
        return;
        }
        if (window.confirm(`Are you sure you want to send ${amountToSend} tokens to ${ethAddress}?`)) {
            setIsLoading(true);

            setIsLoading(false);
            toast({
            title: 'Tokens sent!',
            status: 'success',
            duration: 3000,
            isClosable: true,
            });
        }
        
        
        
    };

    return (
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg="gray.50"
        p="5%"
        spacing={10}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"} textAlign="center">
              Transfer Tokens
            </Heading>
            <FormControl id="email">
              <FormLabel>
                <HStack>
                  <FiUser />
                  <span>ETH Address</span>
                </HStack>
              </FormLabel>
              <Input value={ethAddress}
              placeholder="e.g. 0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
              onChange={(e) => setEthAddress(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>
                <HStack>
                  <FiDollarSign />
                  <span>Amount to send</span>
                </HStack>
              </FormLabel>
              <Input type="text" 
              placeholder="e.g. $100"
                value={amountToSend}
              onChange={(e) => setAmountToSend(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>
                <HStack>
                  <FiLock />
                  <span>OTP</span>
                </HStack>
              </FormLabel>
              <Center>
                <HStack>
                <PinInput value={OTP} onChange={e => setOTP(e)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
                </HStack>
                </Center>
            </FormControl>
            <Button
      colorScheme="blue"
      variant="solid"
      onClick={handleSendTokensClick}
      isDisabled={isLoading}
    >
      {isLoading ? (
        <CircularProgress
          value={isLoading ? 100 : 0}
          size="30px"
          thickness="4px"
          color="blue.500"
        >
          <CircularProgressLabel>
            {isLoading ? 'Sending Tokens' : 'Send Tokens'}
          </CircularProgressLabel>
        </CircularProgress>
      ) : (
        'Send Tokens'
      )}
    </Button>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://s32659.pcdn.co/wp-content/uploads/2021/10/ethereum-fees-lowest.png'
            }
          />
        </Flex>
      </Stack>
    );
  }

export default Form;
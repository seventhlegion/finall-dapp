import { Interface } from '@ethersproject/abi';
import ERC20_ABI from './token-abi.json';

const ERC20_INTERFACE = new Interface(ERC20_ABI);

export { ERC20_ABI, ERC20_INTERFACE };


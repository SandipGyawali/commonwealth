/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TimelockController } from "../TimelockController";

export class TimelockController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e6638038062001e668339810160408190526200003491620003a9565b6200004f60008051602062001e0683398151915280620001e1565b6200007960008051602062001e2683398151915260008051602062001e06833981519152620001e1565b620000a360008051602062001e4683398151915260008051602062001e06833981519152620001e1565b620000be60008051602062001e06833981519152336200022c565b620000d960008051602062001e06833981519152306200022c565b60005b825181101562000142576200012f60008051602062001e268339815191528483815181106200011b57634e487b7160e01b600052603260045260246000fd5b60200260200101516200022c60201b60201c565b6200013a816200041a565b9050620000dc565b5060005b815181101562000198576200018560008051602062001e468339815191528383815181106200011b57634e487b7160e01b600052603260045260246000fd5b62000190816200041a565b905062000146565b5060028390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505062000458565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200023882826200023c565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000238576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002983390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b80516001600160a01b0381168114620002f457600080fd5b919050565b600082601f8301126200030a578081fd5b815160206001600160401b038083111562000329576200032962000442565b8260051b604051601f19603f8301168101818110848211171562000351576200035162000442565b6040528481528381019250868401828801850189101562000370578687fd5b8692505b858310156200039d576200038881620002dc565b84529284019260019290920191840162000374565b50979650505050505050565b600080600060608486031215620003be578283fd5b835160208501519093506001600160401b0380821115620003dd578384fd5b620003eb87838801620002f9565b9350604086015191508082111562000401578283fd5b506200041086828701620002f9565b9150509250925092565b60006000198214156200043b57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b61199e80620004686000396000f3fe60806040526004361061014f5760003560e01c806364d62353116100b6578063b1c5f4271161006f578063b1c5f427146103f3578063c4d252f514610413578063d45c443514610433578063d547741f14610460578063e38335e514610480578063f27a0c921461049357600080fd5b806364d623531461033c5780638065657f1461035c5780638f2a0bb01461037c5780638f61f4f51461039c57806391d14854146103be578063a217fddf146103de57600080fd5b8063248a9ca311610108578063248a9ca31461025b5780632ab0f5291461028b5780632f2ff15d146102bc57806331d50750146102dc57806336568abe146102fc578063584b153e1461031c57600080fd5b806301d5062a1461015b57806301ffc9a71461017d57806307bd0265146101b25780630d3cf6fc146101f4578063134008d31461022857806313bc9f201461023b57600080fd5b3661015657005b600080fd5b34801561016757600080fd5b5061017b610176366004611314565b6104a8565b005b34801561018957600080fd5b5061019d61019836600461151d565b61052c565b60405190151581526020015b60405180910390f35b3480156101be57600080fd5b506101e67fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040519081526020016101a9565b34801561020057600080fd5b506101e67f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b61017b6102363660046112aa565b610563565b34801561024757600080fd5b5061019d6102563660046114da565b6105db565b34801561026757600080fd5b506101e66102763660046114da565b60009081526020819052604090206001015490565b34801561029757600080fd5b5061019d6102a63660046114da565b6000908152600160208190526040909120541490565b3480156102c857600080fd5b5061017b6102d73660046114f2565b610601565b3480156102e857600080fd5b5061019d6102f73660046114da565b61062c565b34801561030857600080fd5b5061017b6103173660046114f2565b610645565b34801561032857600080fd5b5061019d6103373660046114da565b6106c8565b34801561034857600080fd5b5061017b6103573660046114da565b6106de565b34801561036857600080fd5b506101e66103773660046112aa565b610782565b34801561038857600080fd5b5061017b61039736600461142c565b6107c1565b3480156103a857600080fd5b506101e660008051602061194983398151915281565b3480156103ca57600080fd5b5061019d6103d93660046114f2565b61092c565b3480156103ea57600080fd5b506101e6600081565b3480156103ff57600080fd5b506101e661040e366004611387565b610955565b34801561041f57600080fd5b5061017b61042e3660046114da565b61099a565b34801561043f57600080fd5b506101e661044e3660046114da565b60009081526001602052604090205490565b34801561046c57600080fd5b5061017b61047b3660046114f2565b610a5e565b61017b61048e366004611387565b610a84565b34801561049f57600080fd5b506002546101e6565b6000805160206119498339815191526104c18133610be3565b60006104d1898989898989610782565b90506104dd8184610c47565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a604051610519969594939291906116b2565b60405180910390a3505050505050505050565b60006001600160e01b03198216637965db0b60e01b148061055d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6361058f81600061092c565b61059d5761059d8133610be3565b60006105ad888888888888610782565b90506105b98185610d36565b6105c88160008a8a8a8a610dd2565b6105d181610ee6565b5050505050505050565b6000818152600160205260408120546001811180156105fa5750428111155b9392505050565b60008281526020819052604090206001015461061d8133610be3565b6106278383610f1f565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146106ba5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106c48282610fa3565b5050565b600081815260016020819052604082205461063e565b3330146107415760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b60648201526084016106b1565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b600086868686868660405160200161079f969594939291906116b2565b6040516020818303038152906040528051906020012090509695505050505050565b6000805160206119498339815191526107da8133610be3565b8887146107f95760405162461bcd60e51b81526004016106b1906117c7565b8885146108185760405162461bcd60e51b81526004016106b1906117c7565b600061082a8b8b8b8b8b8b8b8b610955565b90506108368184610c47565b60005b8a81101561091e5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e8581811061088457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906108999190611290565b8d8d868181106108b957634e487b7160e01b600052603260045260246000fd5b905060200201358c8c878181106108e057634e487b7160e01b600052603260045260246000fd5b90506020028101906108f29190611854565b8c8b604051610906969594939291906116b2565b60405180910390a361091781611917565b9050610839565b505050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600088888888888888886040516020016109769897969594939291906116ef565b60405160208183030381529060405280519060200120905098975050505050505050565b6000805160206119498339815191526109b38133610be3565b6109bc826106c8565b610a225760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b60648201526084016106b1565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610a7a8133610be3565b6106278383610fa3565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610ab081600061092c565b610abe57610abe8133610be3565b878614610add5760405162461bcd60e51b81526004016106b1906117c7565b878414610afc5760405162461bcd60e51b81526004016106b1906117c7565b6000610b0e8a8a8a8a8a8a8a8a610955565b9050610b1a8185610d36565b60005b89811015610bcd57610bbd82828d8d85818110610b4a57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610b5f9190611290565b8c8c86818110610b7f57634e487b7160e01b600052603260045260246000fd5b905060200201358b8b87818110610ba657634e487b7160e01b600052603260045260246000fd5b9050602002810190610bb89190611854565b610dd2565b610bc681611917565b9050610b1d565b50610bd781610ee6565b50505050505050505050565b610bed828261092c565b6106c457610c05816001600160a01b03166014611008565b610c10836020611008565b604051602001610c2192919061160b565b60408051601f198184030181529082905262461bcd60e51b82526106b191600401611794565b610c508261062c565b15610cb55760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b60648201526084016106b1565b600254811015610d165760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b60648201526084016106b1565b610d208142611899565b6000928352600160205260409092209190915550565b610d3f826105db565b610d5b5760405162461bcd60e51b81526004016106b19061180a565b801580610d775750600081815260016020819052604090912054145b6106c45760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b60648201526084016106b1565b6000846001600160a01b0316848484604051610def9291906115fb565b60006040518083038185875af1925050503d8060008114610e2c576040519150601f19603f3d011682016040523d82523d6000602084013e610e31565b606091505b5050905080610e9e5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b60648201526084016106b1565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5887878787604051610ed59493929190611680565b60405180910390a350505050505050565b610eef816105db565b610f0b5760405162461bcd60e51b81526004016106b19061180a565b600090815260016020819052604090912055565b610f29828261092c565b6106c4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610f5f3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610fad828261092c565b156106c4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006110178360026118b1565b611022906002611899565b67ffffffffffffffff81111561104857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611072576020820181803683370190505b509050600360fc1b8160008151811061109b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110d857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006110fc8460026118b1565b611107906001611899565b90505b600181111561119b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061114957634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061116d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361119481611900565b905061110a565b5083156105fa5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b1565b80356001600160a01b038116811461120157600080fd5b919050565b60008083601f840112611217578182fd5b50813567ffffffffffffffff81111561122e578182fd5b6020830191508360208260051b850101111561124957600080fd5b9250929050565b60008083601f840112611261578182fd5b50813567ffffffffffffffff811115611278578182fd5b60208301915083602082850101111561124957600080fd5b6000602082840312156112a1578081fd5b6105fa826111ea565b60008060008060008060a087890312156112c2578182fd5b6112cb876111ea565b955060208701359450604087013567ffffffffffffffff8111156112ed578283fd5b6112f989828a01611250565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a03121561132e578081fd5b611337886111ea565b965060208801359550604088013567ffffffffffffffff811115611359578182fd5b6113658a828b01611250565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b0312156113a2578081fd5b883567ffffffffffffffff808211156113b9578283fd5b6113c58c838d01611206565b909a50985060208b01359150808211156113dd578283fd5b6113e98c838d01611206565b909850965060408b0135915080821115611401578283fd5b5061140e8b828c01611206565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c031215611449578081fd5b893567ffffffffffffffff80821115611460578283fd5b61146c8d838e01611206565b909b50995060208c0135915080821115611484578283fd5b6114908d838e01611206565b909950975060408c01359150808211156114a8578283fd5b506114b58c828d01611206565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b6000602082840312156114eb578081fd5b5035919050565b60008060408385031215611504578182fd5b82359150611514602084016111ea565b90509250929050565b60006020828403121561152e578081fd5b81356001600160e01b0319811681146105fa578182fd5b81835260006020808501808196508560051b8101915084845b878110156115c55782840389528135601e1988360301811261157e578687fd5b8701803567ffffffffffffffff811115611596578788fd5b8036038913156115a4578788fd5b6115b186828985016115d2565b9a87019a955050509084019060010161155e565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516116438160178501602088016118d0565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516116748160288401602088016118d0565b01602801949350505050565b60018060a01b03851681528360208201526060604082015260006116a86060830184866115d2565b9695505050505050565b60018060a01b038716815285602082015260a0604082015260006116da60a0830186886115d2565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b811015611730576001600160a01b0361171b846111ea565b16825260209283019290910190600101611702565b5083810360208501528881526001600160fb1b0389111561174f578283fd5b8860051b9150818a6020830137016020818101838152848303909101604085015261177b81888a611545565b6060850196909652505050608001529695505050505050565b60208152600082518060208401526117b38160408501602087016118d0565b601f01601f19169190910160400192915050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b6000808335601e1984360301811261186a578283fd5b83018035915067ffffffffffffffff821115611884578283fd5b60200191503681900382131561124957600080fd5b600082198211156118ac576118ac611932565b500190565b60008160001904831182151516156118cb576118cb611932565b500290565b60005b838110156118eb5781810151838201526020016118d3565b838111156118fa576000848401525b50505050565b60008161190f5761190f611932565b506000190190565b600060001982141561192b5761192b611932565b5060010190565b634e487b7160e01b600052601160045260246000fdfeb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1a26469706673582212209e38091602902e218a7c02bae674b95127a81a7409f107bd43167cea5ed732ab64736f6c634300080400335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63";
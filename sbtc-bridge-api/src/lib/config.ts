import { env } from "process";

const PORT = parseInt(env.PORT || '3010');

const SIMNNET_CONFIG = {
  environment: 'staging',
  mongoDbUrl: '',
  mongoDbName: '',
  mongoUser: '',
  mongoPwd: '',
  btcNode: 'http://localhost:18443',
  btcRpcUser: 'devnet',
  btcRpcPwd: 'devnet',
  btcSchnorrReveal: '',
  btcSchnorrReclaim: '',
  btcSchnorrOracle: '',
  host: 'http://localhost', 
  port: PORT,
  network: 'simnet',
  walletPath: '/wallet/SBTC-0003',
  //poxContractId: 'ST000000000000000000002AMW42H.pox-3',
  poxContractId: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-3',
  sbtcContractId: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
  sbtcDeployer: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD',
  sbtcContracts: {
      pool: 'sbtc-stacking-pool',
      registry: 'sbtc-registry',
  },
  stacksApi: 'http://localhost:3999',
  stacksExplorerUrl: 'http://localhost:8000',
  bitcoinExplorerUrl: 'http://localhost:3002',
  mempoolUrl: 'http://localhost:18443',
  blockCypherUrl: 'http://localhost:18443',
  publicAppName: 'sBTC Bridge Simnet API',
  publicAppVersion: '1.0.0',
}

const TESTNET_CONFIG = {
  environment: 'staging',
  mongoDbUrl: '',
  mongoDbName: '',
  mongoUser: '',
  mongoPwd: '',
  btcNode: 'bitcoind.testnet.stacks.co',
  btcRpcUser: 'blockstack',
  btcRpcPwd: 'blockstacksystem',
  btcSchnorrReveal: '',
  btcSchnorrReclaim: '',
  btcSchnorrOracle: '',
  host: 'http://localhost', 
  port: PORT,
  network: 'testnet',
  walletPath: '/wallet/SBTC-0003',
  //poxContractId: 'ST000000000000000000002AMW42H.pox-3',
  poxContractId: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-3',
  sbtcContractId: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
  sbtcDeployer: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD',
  sbtcContracts: {
      pool: 'sbtc-stacking-pool',
      registry: 'sbtc-registry',
  },
  stacksApi: 'https://api.testnet.hiro.so',
  stacksExplorerUrl: 'https://explorer.hiro.co',
  bitcoinExplorerUrl: 'https://mempool.space/testnet/api',
  mempoolUrl: 'https://mempool.space/testnet/api',
  blockCypherUrl: 'https://api.blockcypher.com/v1/btc/test3',
  publicAppName: 'sBTC Bridge Testnet API',
  publicAppVersion: '1.0.0',
}

const MAINNET_CONFIG = {
  environment: 'production',
  mongoDbUrl: '',
  mongoDbName: '',
  mongoUser: '',
  mongoPwd: '',
  btcNode: 'bitcoind.stacks.co',
  btcRpcUser: 'blockstack',
  btcRpcPwd: 'blockstacksystem',
  btcSchnorrReveal: '',
  btcSchnorrReclaim: '',
  btcSchnorrOracle: '',
  host: 'http://localhost',
  port: PORT,
  network: 'mainnet',
  walletPath: '/wallet/descwallet',
  poxContractId: 'SP000000000000000000002Q6VF78.pox-3',
  sbtcContractId: 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant',
  sbtcDeployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  sbtcContracts: {
      pool: 'sbtc-stacking-pool',
      registry: 'sbtc-registry',
  },
  stacksApi: 'https://api.hiro.so',
  stacksExplorerUrl: 'https://explorer.hiro.co',
  bitcoinExplorerUrl: 'https://mempool.space/api',
  mempoolUrl: 'https://mempool.space/api',
  blockCypherUrl: 'https://api.blockcypher.com/v1/btc/main',
  publicAppName: 'sBTC Bridge Mainnet API',
  publicAppVersion: '1.0.0',
}

const DEVNET_CONFIG = {
  environment: 'devnet',
  mongoDbUrl: '',
  mongoDbName: '',
  mongoUser: '',
  mongoPwd: '',
  btcNode: 'bitcoind.testnet.stacks.co',
  btcRpcUser: 'blockstack',
  btcRpcPwd: 'blockstacksystem', 
  btcSchnorrReveal: '',
  btcSchnorrReclaim: '',
  btcSchnorrOracle: '',
  host: 'http://localhost',
  port: 3010,
  walletPath: '/wallet/descwallet',
  network: 'testnet',
  poxContractId: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-3',
  sbtcContractId: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
  sbtcDeployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  sbtcContracts: {
      pool: 'sbtc-stacking-pool',
      registry: 'sbtc-registry',
  },
  stacksApi: 'http://devnet.stx.eco',
  stacksExplorerUrl: 'http://devnet.stx.eco:8000/?chain=devnet',
  bitcoinExplorerUrl: 'https://mempool.space/testnet/api',
  mempoolUrl: 'https://mempool.space/testnet/api',
  blockCypherUrl: 'https://api.blockcypher.com/v1/btc/test3',
  publicAppName: 'sBTC Bridge Devnet API',
  publicAppVersion: '1.0.0',
}

const LINODE_TESTNET_CONFIG = {
  environment: 'staging',
  mongoDbUrl: '',
  mongoDbName: '',
  mongoUser: '',
  mongoPwd: '',
  btcNode: 'bitcoind.testnet.stacks.co',
  btcRpcUser: 'blockstack',
  btcRpcPwd: 'blockstacksystem',
  btcSchnorrReveal: '',
  btcSchnorrReclaim: '',
  btcSchnorrOracle: '',
  host: 'http://localhost',
  port: 3010,
  walletPath: '/wallet/SBTC-0003',
  network: 'testnet',
  poxContractId: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.pox-3',
  //poxContractId: 'SP000000000000000000002Q6VF78.pox-3',
  sbtcContractId: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
  sbtcDeployer: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD',
  sbtcContracts: {
      pool: 'sbtc-stacking-pool',
      registry: 'sbtc-registry',
  },
  //stacksApi: 'http://devnet.stx.eco',
  //stacksExplorerUrl: 'http://devnet.stx.eco:8000/?chain=devnet',
  stacksApi: 'https://api.testnet.hiro.so',
  stacksExplorerUrl: 'https://explorer.hiro.co',
  bitcoinExplorerUrl: 'https://mempool.space/testnet/api',
  mempoolUrl: 'https://mempool.space/testnet/api',
  blockCypherUrl: 'https://api.blockcypher.com/v1/btc/test3',
  publicAppName: 'sBTC Bridge Staging API',
  publicAppVersion: '1.0.0',
}

const LINODE_MAINNET_CONFIG = {
  environment: 'production',
  mongoDbUrl: '',
  mongoDbName: '',
  mongoUser: '',
  mongoPwd: '',
  btcNode: '',
  btcRpcUser: '',
  btcRpcPwd: '',
  btcSchnorrReveal: '',
  btcSchnorrReclaim: '',
  btcSchnorrOracle: '',
  host: 'http://localhost',
  port: 3020,
  network: 'mainnet',
  walletPath: '/wallet/SBTC-0003',
  poxContractId: 'SP000000000000000000002Q6VF78.pox-3',
  sbtcContractId: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
  sbtcDeployer: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  sbtcContracts: {
      pool: 'sbtc-stacking-pool',
      registry: 'sbtc-registry',
  },
  stacksApi: 'https://api.hiro.so',
  stacksExplorerUrl: 'https://explorer.hiro.co',
  bitcoinExplorerUrl: 'https://mempool.space/api',
  mempoolUrl: 'https://mempool.space/api',
  blockCypherUrl: 'https://api.blockcypher.com/v1/btc/main',
  publicAppName: 'sBTC Bridge Mainnet API',
  publicAppVersion: '1.0.0',
}

let CONFIG: {
  mongoDbUrl: string; 
  mongoUser: string; 
  mongoPwd: string; 
  mongoDbName: string; 
  btcNode: string; 
  btcRpcUser: string; 
  btcRpcPwd: string; 
  btcSchnorrReveal: string; 
  btcSchnorrReclaim: string; 
  btcSchnorrOracle: string; 
  host: string; 
  port: number; 
  walletPath: string; 
  network: string; 
  poxContractId: string; 
  sbtcContractId: string; 
  sbtcDeployer: string; 
  sbtcContracts: {
      pool: string; 
      registry: string;
  },
  stacksApi: string; 
  stacksExplorerUrl: string; 
  bitcoinExplorerUrl: string; 
  mempoolUrl: string; 
  blockCypherUrl: string;
  publicAppName: string;
  publicAppVersion: string; 
};

export function setConfigOnStart() {
	if (isDev()) CONFIG = DEVNET_CONFIG;
	else if (isSimnet()) CONFIG = SIMNNET_CONFIG;
	else if (isLinodeTestnet()) CONFIG = LINODE_TESTNET_CONFIG;
	else if (isLinodeMainnet()) CONFIG = LINODE_MAINNET_CONFIG;
	else if (isTMTestnet()) CONFIG = TESTNET_CONFIG;
	else CONFIG = MAINNET_CONFIG;
  setOverrides();
}

function setOverrides() {
  //console.log('process.env: ', process.env)
  if (isDev() || isLinodeTestnet() || isLinodeMainnet() || isSimnet()) {
    console.log('================================================ >>' + process.env.TARGET_ENV)
    // Not Trust Machines Kit - so override the btc connection params with platform values;
    CONFIG.mongoDbUrl = process.env.mongoDbUrl || '';
    CONFIG.mongoDbName = process.env.mongoDbName || '';
    CONFIG.mongoUser = process.env.mongoUser || ''
    CONFIG.mongoPwd = process.env.mongoPwd || '';
    CONFIG.btcNode = process.env.btcNode || '';
    CONFIG.btcRpcUser = process.env.btcRpcUser || '';
    CONFIG.btcRpcPwd = process.env.btcRpcPwd || '';
    CONFIG.btcSchnorrReveal = process.env.btcSchnorrReveal || '';
    CONFIG.btcSchnorrReclaim = process.env.btcSchnorrReclaim || '';
    CONFIG.btcSchnorrOracle = process.env.btcSchnorrOracle || '';
  }
  if (isSimnet() || isDev()) {
    // setup access to services - mongo, bitocin etc running outside of docker 
    // without risking leaking testnet/mainnet configuration variables
    CONFIG.mongoDbUrl = 'cluster0.kepjbx0.mongodb.net'
    CONFIG.mongoDbName = 'sbtc-bridge-simnet-db'
    CONFIG.mongoUser = 'dockerdev1'
    CONFIG.mongoPwd = 'FbKWBThNLIjqExG1'
    CONFIG.btcNode = 'http://localhost:18443' // ie not via docker network
    CONFIG.btcRpcUser = 'devnet'
    CONFIG.btcRpcPwd = 'devnet'
    CONFIG.btcSchnorrReveal = '93a7e5ecde5eccc4fd858dfcf7d92011eade103600de0e8122d6fc5ffedf962d'
    CONFIG.btcSchnorrReclaim = 'eb80b7f63eb74a215b6947b479e154a83cf429691dceab272c405b1614efb98c'    
    CONFIG.btcSchnorrOracle = '0d7b49bc4864057b087108f81a57da7178cfbeb85a09c8957b64b9840e368b42'    
  }
  if (isLinodeTestnet() || isLinodeMainnet() || isDev() || isSimnet()) {
    console.log('linode env.. changing CONFIG.mongoDbName = ' + CONFIG.mongoDbName)
    console.log('linode env.. changing CONFIG.mongoUser = ' + CONFIG.mongoUser)
    console.log('linode env.. changing CONFIG.mongoPwd = ' + CONFIG.mongoPwd.substring(0,2))
    console.log('linode env.. process.env.mongoDbName = ' + process.env.mongoDbName)
    console.log('linode env.. process.env.BTC_NODE = ' + process.env.btcNode)
    console.log('linode env.. changing CONFIG.btcNode = ' + CONFIG.btcNode)
    console.log('linode env.. changing CONFIG.btcRpcUser = ' + CONFIG.btcRpcUser)
    console.log('linode env.. changing CONFIG.btcSchnorrReveal = ' + CONFIG.btcSchnorrReveal.substring(0,2))
    console.log('linode env.. changing CONFIG.btcSchnorrReveal = ' + CONFIG.btcSchnorrReveal.substring(CONFIG.btcSchnorrReveal.length-3,CONFIG.btcSchnorrReveal.length))
    console.log('linode env.. changing CONFIG.btcSchnorrReclaim = ' + CONFIG.btcSchnorrReclaim.substring(0,2))
    console.log('linode env.. changing CONFIG.btcSchnorrReclaim = ' + CONFIG.btcSchnorrReclaim.substring(CONFIG.btcSchnorrReveal.length-3,CONFIG.btcSchnorrReveal.length))
    console.log('linode env.. changing CONFIG.btcSchnorrOracle = ' + CONFIG.btcSchnorrOracle.substring(0,2))
    console.log('linode env.. changing CONFIG.btcSchnorrOracle = ' + CONFIG.btcSchnorrOracle.substring(CONFIG.btcSchnorrOracle.length-3,CONFIG.btcSchnorrOracle.length))
  }
}

function isSimnet() {
  const environ = process.env.TARGET_ENV;
  return (environ && environ === 'simnet')
}

function isDev() {
  const environ = process.env.TARGET_ENV;
  return (!environ || environ === 'test' || environ === 'development' || environ === 'dev')
}

function isLinodeTestnet() {
  const environ = process.env.TARGET_ENV;
  return (environ && environ.indexOf('linode-staging') > -1)
}

function isLinodeMainnet() {
  const environ = process.env.TARGET_ENV;
  return (environ && environ.indexOf('linode-production') > -1)
}

function isTMMainnet() {
  const environ = process.env.NODE_ENV;
  return ((!isLinodeTestnet() || isDev()) && (environ === 'production' || environ === 'prod'))
}

function isTMTestnet() {
  const environ = process.env.NODE_ENV;
  return ((!isLinodeTestnet() || isDev()) && (environ === 'staging' || environ === 'stag'))
}

/**
export function setConfig(search:string) {
	if (!search) setConfigOnStart();
	else if (search.indexOf('net=testnet') > -1) {

    if (isDev()) CONFIG = DEVNET_CONFIG;
    else if (isLinodeTestnet()) CONFIG = LINODE_TESTNET_CONFIG;
    else CONFIG = TESTNET_CONFIG;
  }
	else if (search.indexOf('net=devnet') > -1) CONFIG = DEVNET_CONFIG;
	else CONFIG = MAINNET_CONFIG
  setOverrides();
}
 */

export function getConfig() {
  if (!CONFIG) setConfigOnStart();
	return CONFIG;
}
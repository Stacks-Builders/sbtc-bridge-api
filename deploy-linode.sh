#!/bin/bash -e
#
############################################################

export DEPLOYMENT=$1
export PORT=22
export SERVER=popper.brightblock.org
export DOCKER_NAME=bridge_api_staging
export DOCKER_PORT=3010
export TARGET_ENV=linode-staging
if [ "$DEPLOYMENT" == "prod" ]; then
  SERVER=chomsky.brightblock.org;
  DOCKER_NAME=bridge_api_production
  TARGET_ENV=linode-production
  DOCKER_PORT=3020
  PORT=7019
fi
export DOCKER_ID_USER='mijoco'
export DOCKER_CMD='docker'

$DOCKER_CMD build -t mijoco/bridge_api sbtc-bridge-api
$DOCKER_CMD tag mijoco/bridge_api mijoco/bridge_api
$DOCKER_CMD push mijoco/bridge_api:latest

printf "\nConnecting to: $SERVER.\n\n"
printf "\nDeploying docker container: $DOCKER_NAME.\n\n"

ssh -i ~/.ssh/id_rsa -p $PORT bob@$SERVER "
  cd /home/bob/hubgit/sbtc-bridge-api
  pwd
  cat .env;
  docker login;
  docker pull mijoco/bridge_api;

  docker rm -f ${DOCKER_NAME}
  source /home/bob/.profile;
  docker run -d -t -i --name ${DOCKER_NAME} -p ${DOCKER_PORT}:3010 \
    -e TARGET_ENV=${TARGET_ENV} \
    -e btcSchnorrReveal=${BTC_SCHNORR_KEY_REVEAL} \
    -e btcSchnorrReclaim=${BTC_SCHNORR_KEY_RECLAIM} \
    -e btcRpcUser=${BTC_RPC_USER} \
    -e btcRpcPwd=${BTC_RPC_PWD} \
    -e btcNode=${BTC_NODE} \
    -e mongoDbUrl=${MONGO_PROD_SBTC_URL} \
    -e mongoDbName=${MONGO_PROD_SBTC_DBNAME} \
    -e mongoUser=${MONGO_PROD_SBTC_USER} \
    -e mongoPwd=${MONGO_PROD_SBTC_PWD} \
    mijoco/bridge_api
";

printf "Finished....\n"
printf "\n-----------------------------------------------------------------------------------------------------\n";

exit 0;

# docker rm -f bridge_api_production
# docker run -d -t -i --name bridge_api_production -p 3020:3010 -e TARGET_ENV='linode-production' -e btcSchnorrReveal=${BTC_SCHNORR_KEY_REVEAL} -e btcSchnorrReclaim=${BTC_SCHNORR_KEY_RECLAIM} -e btcRpcUser=${BTC_RPC_USER} -e btcRpcPwd=${BTC_RPC_PWD} -e btcNode=${BTC_NODE} -e mongoDbUrl=${MONGO_PROD_SBTC_URL} -e mongoDbName=${MONGO_PROD_SBTC_DBNAME} -e mongoUser=${MONGO_PROD_SBTC_USER} -e mongoPwd=${MONGO_PROD_SBTC_PWD} mijoco/bridge_api
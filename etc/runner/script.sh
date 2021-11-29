#!/bin/bash

TYPES="eslint"
SELECTED_PACKAGES=""
BLUE='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

_HELP() {
   echo "Usage: $0 -t eslint -p <package-name>"
   echo "\t-t this argument is not required, for this argument you can fill in arguments like a test, linter, dev, prod. by default will be set linter"
   echo "\t-p this argument is not required, for the value you can refer each package name on directory /packages. for the example 'skywalker-helper'"
   exit 1 # Exit script after printing help
}

_MAIN() {
  if [[ $TYPES = "eslint" ]]; then
    _EXECUTE_SCRIPT eslint $SELECTED_PACKAGES
  elif [[ $TYPES = "test" ]]; then
    _EXECUTE_SCRIPT test $SELECTED_PACKAGES
  
  else
    echo "${RED}[ERROR] ${NC}Unknown Stage. Exit!"
    exit 1
  fi
}

_RUNNING_SCRIPT() {
  if pnpm --filter $1 run | grep -q $2; then
    echo "${BLUE}[INFO] ${NC}Running script $2 on $1 package"
    pnpm --filter $1 $2
  else
    echo "${RED}[ERROR] ${NC}On $1 package it's not exist script $2\n"
  fi
}

_EXECUTE_SCRIPT() {
  if ! [[ $2 = "" ]]; then
    _RUNNING_SCRIPT $2 $1
  else
    for FILE_PATH in $(pnpm list --filter ./packages/ --parseable --depth=-1)
    do
      PACKAGE_NAME=$(cat ${FILE_PATH}/package.json \
        | grep name \
        | head -1 \
        | awk -F: '{ print $2 }' \
        | sed 's/[",]//g')

      _RUNNING_SCRIPT $PACKAGE_NAME $1
    done
  fi
}


while getopts "t:p:" opt
  do
    case "$opt" in
        t ) TYPES="$OPTARG" ;;
        p ) SELECTED_PACKAGES="$OPTARG" ;;
        ? ) _HELP ;;
    esac
  done

_MAIN "$@"; exit
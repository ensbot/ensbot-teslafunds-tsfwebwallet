'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETIG: "TSF"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETIG, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETIG];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETIG, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'TSF',
        'blockExplorerTX': 'https://tsfexplorer.xyz/tx/[[txHash]]',
        'blockExplorerAddr': 'https://tsfexplorer.xyz/addr/[[address]]',
        'type': nodes.nodeTypes.ETIG,
        'eip155': false,
        'chainId': 1856,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'tsf.europool.me',
        'lib': new nodes.customNode('https://tsfapi.europool.me', '')
    },
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;

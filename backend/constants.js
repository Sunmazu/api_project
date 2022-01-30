const CONSTANTS = {};
CONSTANTS.ENDPOINT = {};
CONSTANTS.DATA = {};

CONSTANTS.PORT = process.env.PORT || "3001";
CONSTANTS.ENDPOINT.MASTERDETAIL = "/masterdetail";

CONSTANTS.DATA.CATFACTS = [
    'cat fact 1',
    'cat fact 2',
    'cat fact 3',
    'cat fact 4',
    'cat fact 5',
];

CONSTANTS.ENDPOINT.LIST = "/list";

CONSTANTS.ENDPOINT.GRID = "/grid";


module.exports = CONSTANTS;

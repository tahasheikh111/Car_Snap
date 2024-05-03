pragma solidity >=0.4.22 <0.8.0;

pragma experimental ABIEncoderV2;

contract ResultStorage {
    struct Result {
        address sender;
        string imageHash;
        string result;
    }

    mapping(bytes32 => Result) public results;
    uint256 public resultCount;

    event ResultStored(address indexed sender, string imageHash, string result);

    function storeResult(string memory _imageHash, string memory _result) public {
        bytes32 key = keccak256(abi.encodePacked(_imageHash));
        results[key] = Result(msg.sender, _imageHash, _result);
        emit ResultStored(msg.sender, _imageHash, _result);
        resultCount++;
    }

function getResult(string memory _imageHash) public view returns (address, string memory) {
    bytes32 key = keccak256(abi.encodePacked(_imageHash));
    Result storage result = results[key];
    return (result.sender, result.result);
}

}

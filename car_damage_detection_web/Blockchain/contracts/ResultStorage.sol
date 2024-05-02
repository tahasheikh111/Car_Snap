pragma solidity >=0.4.22 <0.8.0;

pragma experimental ABIEncoderV2;

contract ResultStorage {
    struct Result {
        address sender;
        string imageHash;
        string result;
    }

    mapping(uint256 => Result) public results;
    uint256 public resultCount;

    event ResultStored(uint256 indexed id, address sender, string imageHash, string result);

    function storeResult(string memory _imageHash, string memory _result) public {
        results[resultCount] = Result(msg.sender, _imageHash, _result);
        emit ResultStored(resultCount, msg.sender, _imageHash, _result);
        resultCount++;
    }

    function getResult(uint256 _id) public view returns (address, string memory, string memory) {
        Result storage result = results[_id];
        return (result.sender, result.imageHash, result.result);
    }
}

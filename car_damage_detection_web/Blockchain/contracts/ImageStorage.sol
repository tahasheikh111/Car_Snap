pragma solidity >=0.4.22 <0.8.0;

pragma experimental ABIEncoderV2;

contract ImageStorage {
    mapping(address => string[]) public userImages;
    address[] public users;
    address payable public feeRecipient; // Address to receive the service fee

    event ImageStored(address indexed user, string imageHash);

    constructor(address payable _feeRecipient) public {
        feeRecipient = _feeRecipient;
    }

    function storeImage(string memory _imageHash) public payable {
        // Check if the sender has enough Ether (0.1 ether) to proceed with the upload
        require(msg.value >= 0.1 ether, "Insufficient Ether");

        if (userImages[msg.sender].length == 0) {
            users.push(msg.sender);
        }
        userImages[msg.sender].push(_imageHash);
        emit ImageStored(msg.sender, _imageHash);

        // Transfer the service fee to the specified address
        feeRecipient.transfer(msg.value);
    }

    function setAddress(address payable _newAddress) public {
        feeRecipient = _newAddress;
    }

    function addressCount() public view returns (uint256) {
        return users.length;
    }

    function userAtIndex(uint256 _index) public view returns (address) {
        require(_index < users.length, "Index out of bounds");
        return users[_index];
    }

    function getImagesByUser(address _user) public view returns (string[] memory) {
        return userImages[_user];
    }
}

pragma solidity >=0.4.22 <0.8.0;

pragma experimental ABIEncoderV2;

contract ReviewStorage {
    struct Review {
        address userAddress;
        string imageHash;
        string reviewText;
        uint8 rating; // New rating element
    }

    mapping(address => Review[]) public userReviews;
    address[] public users;

    event ReviewAdded(address indexed userAddress, string imageHash, string reviewText, uint8 rating); // Update event definition

    function addReview(string memory _imageHash, string memory _reviewText, uint8 _rating) public {
        Review memory newReview = Review({
            userAddress: msg.sender,
            imageHash: _imageHash,
            reviewText: _reviewText,
            rating: _rating // Assign rating
        });

        userReviews[msg.sender].push(newReview);

        if (!isUserExists(msg.sender)) {
            users.push(msg.sender);
        }

        emit ReviewAdded(msg.sender, _imageHash, _reviewText, _rating); // Emit event with rating
    }

    function getReviewsByUser(address _user) public view returns (Review[] memory) {
        return userReviews[_user];
    }

    function getAllUsers() public view returns (address[] memory) {
        return users;
    }

    function isUserExists(address _user) internal view returns (bool) {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i] == _user) {
                return true;
            }
        }
        return false;
    }
}
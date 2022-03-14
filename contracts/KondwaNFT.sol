//SPDX-License-Identifier: Unlicense
pragma solidity >= 0.4.23 < 0.9.0;
import "@openzeppelin/contracts/token/ERC721.sol"
import "@openzeppelin/contracts/access/Ownable.sol";

contract KondwaNFT is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUrl;
    //constructor with token name and symbol
    constructor() payable ERC721("KondwaNg", "KN"){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }
    //enable miniting
    function setIsPublicMintEnabled(bool isPublicMintEnabled) external onlyOwner{
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUrl(string calldata baseTokenUrl) external onlyOwner {
        baseTokenUrl = _baseTokenURl;
    }

    function tokenURL(uint256 _tokenId) public view override returns (string memory) {
        required(_exists(_tokenId), "token does not exist");
        return string(abi.encodePacked(baseTokenUrl, Strings.toString(_tokenId, ".json")));
    }

    function withdraw() external onlyOwner{
        (bool success) = withdrawalWallet.call{value: address(this).balance}("");
        require(success, "withdraw fialed");
    }

}
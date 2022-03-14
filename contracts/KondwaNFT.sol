//SPDX-License-Identifier: Unlicense
pragma solidity >= 0.4.23 < 0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract KondwaNFT is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUrl;
    address payable public withdrawWallet;
    mapping(address=> uint256) public walletMints;

    //constructor with token name and symbol
    constructor() payable ERC721("KondwaNg", "KN"){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }
    //enable miniting
    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner{
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUrl(string calldata _baseTokenUrl) external onlyOwner {
        baseTokenUrl = _baseTokenUrl;
    }

    function tokenURL(uint256 _tokenId) public view returns (string memory) {
        require(_exists(_tokenId), "token does not exist");
        return string(abi.encodePacked(baseTokenUrl, Strings.toString(_tokenId), ".json"));
    }

    function withdraw() external onlyOwner{
        (bool success,) = withdrawWallet.call{value: address(this).balance}("");
        
        require(success, "withdraw failed");
    }

    function mint(uint256 _quantity) public payable{
        require(isPublicMintEnabled, 'minting not enabled');
        require(msg.value == _quantity, 'wrong mint value');
        require(totalSupply + _quantity <= maxSupply, 'sold out');
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, 'excedeed max in wallet');

        for (uint256 i = 0; i < _quantity; i++){
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }

}
pragma solidity ^0.4.18;

import './IApplication.sol';
import './OwnableStorage.sol';

contract Ownable is OwnableStorage, IApplication {

  event OwnerUpdate(address _prevOwner, address _newOwner);

  function initialize(bytes) public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    assert(msg.sender == owner);
    _;
  }

  function transferOwnership(address _newOwner) public onlyOwner {
    require(_newOwner != owner);
    owner = _newOwner;
  }
}

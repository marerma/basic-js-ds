const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
   return this.rootNode
  }
 
  add(data) {
    const newNode = new Node(data)
  
    if(!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

  let currentNode = this.rootNode;
     
  while(currentNode) {
      if(newNode.data < currentNode.data) {
        if(!currentNode.left) {
           currentNode.left = newNode;
           return;
        } 
         currentNode = currentNode.left;
       
      } else {
        if(!currentNode.right) {
           currentNode.right = newNode;
           return;
        } 
         currentNode = currentNode.right;
      }
    }
  }  


  has(data){
    return searchTheTree(this.rootNode, data)

    function searchTheTree(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      
      if(data < node.data) {
        return searchTheTree(node.left, data)
      } else return searchTheTree(node.right, data)
  
    }
  }

  find(data) {
    return findNode(this.rootNode, data)

    function findNode(node, data) {
      if(!node) {
        return null;
      }
      if(node.data === data) {
        return node;
      }
      
      if(data < node.data) {
        return findNode(node.left, data)
      } else return findNode(node.right, data)
  
    }
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data)
    
    function deleteNode (node, data) {
      if(!node) {
        return null;
      }
      if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else {
        if(!node.right && !node.left) {
        return null;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }

        let maxFromLeft = node.left
        
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        
        node.data = maxFromLeft.data;
        node.left = deleteNode(node.left, maxFromLeft.data);
        return node;
      }
      
    }
  }

  min() {
  if(!this.rootNode) {
    return;
  }
  let minNode = this.rootNode
  while(minNode.left) {
    minNode = minNode.left;
  }
  return minNode.data;
  }

  max() {
    if(!this.rootNode) {
      return;
    }
    let maxNode = this.rootNode
    while(maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;  
  } 
}

module.exports = {
  BinarySearchTree
};
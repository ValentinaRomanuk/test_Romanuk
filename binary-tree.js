'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		var Node = function(data){
			this.data = data;
			this.left = null;
			this.right = null;
		};
		
		var newNode = new Node(data, null, null);
			if(this.root == null){
				this.root = newNode;
			}
				else {
					var currentNode = this.root;
					var parentNode;
						while(true){
							parentNode = currentNode;
								if(data < currentNode.data){
									currentNode = currentNode.left;
										if(currentNode == null){
											parentNode.left = newNode;
												break;
										}
								}
									else{
										currentNode = currentNode.right;
											if(currentNode == null){
												parentNode.right = newNode;
													break;
											}
									}
						}
				}
	}

	contains(data) {
		var currentNode = this.root;
		var found = function(currentNode) {
			if (!currentNode) return false;
				if (data === currentNode.data) {
					return true;
				} 
					else if (data > currentNode.data) {
						return found(currentNode.right);
							} else if (data < currentNode.data) {
								return found(currentNode.left);
							}
		};
    return found(currentNode);
	}

	remove(data) {
		var currentNode = this.root;
		var parentNode = null;
		var childNode = null;
		
		while(currentNode != null && currentNode.data != data) {
	        parentNode = currentNode;
			if (data < currentNode.data){
				currentNode = currentNode.left;
			}
			else{
				currentNode = currentNode.right;
			}
	    }
	 
	    if(currentNode == null) {
	    	return;
	    } else {	 
	       	if(currentNode.left == null || currentNode.right == null) {   
	            if(currentNode.left != null) { 
	                childNode = currentNode.left;
	            } else {
	            	if(currentNode.right != null) {
	             		childNode = currentNode.right;
	            	}
	            }

	            if(parentNode == null) {
	                this.root = childNode;
	            } else {
	                if(parentNode.left == currentNode){
	                    parentNode.left = childNode;
	                } else {
	                    parentNode.right = childNode;
	                }
	            }
	        } else {
	            var leftNode = currentNode.right;
	            var leftNodeParent = currentNode;
	            
	            while(leftNode.left != null) {
	                leftNodeParent = leftNode;
	                leftNode = leftNode.left;
	            }
	 
	            currentNode.data = leftNode.data;
	 
	            if(leftNodeParent.left == leftNode) {
	                leftNodeParent.left = null;
	            } else {
	                leftNodeParent.right = null;
	            }
	        }
	    }
	}
	
	size(){
			var length = 0;
			this.traverse(function(node){
				length++;
			});
			return length;
	}
				
			traverse(process){
				function inOrder(node){
					if (node){
						if (node.left !== null){
							inOrder(node.left);
						}            
         
						process.call(this, node);

						if (node.right !== null){
							inOrder(node.right);
						}
					}
				}	
				inOrder(this.root);
			}

				
	
	isEmpty() {
		if(this.root == null){
			return true;
		}
		else{
			return false;
		}
	}
}
function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function deepestChild() {
	var node = document.querySelector('#grand-node')
	var nestedNode = node.children[0]
	while (nestedNode) {
		node = nestedNode
		nestedNode = node.children[0]
	}

	return node
}

function increaseRankBy(n) {
	var lists = document.querySelector('.ranked-list')
	for (var i = 0; i < lists.children.length; i++) {
		var answer = parseInt(lists.children[i].innerHTML) + n
	}

	return answer
}
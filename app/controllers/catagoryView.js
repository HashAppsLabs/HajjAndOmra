var args = arguments[0] || {};

var type = args.type;
var collection = Alloy.Collections.catagory;
collection.fetch({
		// query: 'SELECT * FROM model WHERE columns
		query: {
			statement: 'SELECT * FROM catagory WHERE type = ?',
			params: [type]
		}
	});
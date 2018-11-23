function convert(decimal) {

	var key, val, result = '';

	var map = [{
			1000: 'M'
		},
		{
			900: 'CM'
		},
		{
			500: 'D'
		},
		{
			400: 'CD'
		},
		{
			100: 'C'
		},
		{
			90: 'LC'
		},
		{
			50: 'L'
		},
		{
			40: 'XL'
		},
		{
			10: 'X'
		},
		{
			9: 'IX'
		},
		{
			5: 'V'
		},
		{
			4: 'IV'
		},
		{
			1: 'I'
		}
	];



	for (var i = 0, len = map.length; i < len; i++) {
		key = Object.keys(map[i])[0];
		val = map[i][key];

		while (decimal >= key) {
			result += val;
			decimal -= key;
		}

	}

	return result;
}

module.exports = convert;

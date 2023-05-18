class RandomValues {

	static getRandomNumber(minValue, maxValue) {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}


	static getRandomArray(arrayLength, minValue, maxValue) {
		const randomArray = []
		for (let i = 0; i < arrayLength; i++) {
			const randomNumber = RandomValues.getRandomNumber(minValue, maxValue)
			randomArray.push(randomNumber)
		}
		return randomArray
	}


	static getRandomTable(rowsAmount, columnsAmount, minValue, maxValue) {
		const randomTable = []
		for (let i = 0; i < rowsAmount; i++) {
			const randomRow = RandomValues.getRandomArray(columnsAmount, minValue, maxValue)
			randomTable.push(randomRow)
		}
		return randomTable
	}
}
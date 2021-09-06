class GuessingGame {
		constructor() {}
		
		setRange(min, max) {
				this.min = min
				this.max = max
		}
		
		guess() {
				return this.min + Math.ceil((this.max - this.min) / 2)
		}
		
		lower() {
				return this.max = this.guess()
		}
		
		greater() {
				return this.min = this.guess()
		}
}

module.exports = GuessingGame

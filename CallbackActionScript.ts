
// You can write more code here

/* START OF COMPILED CODE */

class CallbackActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public callback!: () => void;

	/* START-USER-CODE */

	execute() {

		if (this.callback) {

			this.callback();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
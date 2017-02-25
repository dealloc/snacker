const CONTAINER_ID = 'snackbar-container';
const SNACKBAR_ID = 'snackbar';
const ACTION_ID = 'snackbar-action';
const DEFAULT_OPTIONS = {
	type: 'info',
	duration: 3000,
};

export default class Snackbar {
	container = null;
	snackbar = null;
	button = null;
	queue = [];
	active = false;

	constructor() {
		this.createContainer();
		this.createSnackbar();
		this.createButton();
	}

	createContainer() {
		this.container = document.createElement('div');
		this.container.setAttribute('id', CONTAINER_ID);
		document.body.appendChild(this.container);
	}

	createSnackbar() {
		this.snackbar = document.createElement('div');
		this.snackbar.setAttribute('id', SNACKBAR_ID);
		this.container.appendChild(this.snackbar);
	}

	createButton() {
		this.button = document.createElement('button');
		this.button.setAttribute('id', ACTION_ID);
	}

	show(text, options = DEFAULT_OPTIONS) {
		if (this.active) {
			this.queue.unshift({ text, options });
			return;
		}

		this.active = true;
		this.snackbar.innerHTML = text;
		if (options.action !== undefined) {
			this.button.innerText = options.action.text;
			this.button.onclick = options.action.handler;
			this.snackbar.appendChild(this.button);
		}
		this.snackbar.setAttribute('class', ''); // clear all classes
		this.snackbar.classList.add('active', options.type);
		setTimeout(() => {
			this.snackbar.classList.remove('active');
			if (this.queue.length !== 0) {
				const queued = this.queue.pop();
				setTimeout(() => this.show(queued.text, queued.options), 520); // wait for fadeout
				this.active = false;
			}
		}, options.duration);
	}
}
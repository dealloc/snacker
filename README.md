# Snacker
## A simple snackbar implementation

### Usage
- Install using `npm install snacker` or `yarn add snacker`
- Import runtime with `import Snackbar from 'snacker';`
- Import styles with `import 'snacker/dist/snackbar.css';`
- Create snackbar queue with `const snackbar = new Snackbar();`
- Show a snackbar `snackbar.show('Hello world');`

### API

| parameter | default   | required | type    | information                                                                                                                             |
|-----------|-----------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------|
| type      | info      | yes      | string  | Determines the type of snackbar to be displayed (this is added as a class to the snackbar). Can be of type 'info', 'warning' or 'error' |
| duration  | 3000      | yes      | integer | How long the snackbar is shown (in milliseconds)                                                                                        |
| action    | undefined | no       | object  | A configuration object for adding an action to the snackbar                                                                             |

The `action` object is structured as following:

| parameter | default   | required | type     | information                                                                           |
|-----------|-----------|----------|----------|---------------------------------------------------------------------------------------|
| text      | undefined | yes      | string   | The text to be shown on the action button in the snackbar (don't make this too long!) |
| handler   | undefined | yes      | function | The function to be executed when the user clicks on the action button on the snackbar |

### Customize

Instead of requiring the prebuilt *snackbar.css* file, you can import the scss source into your stylesheet and customize the colours you want. Currently the following variables are available:
- `snackbar-background`: The background of the snackbar (default `rgba(51, 51, 51, 0.9)`)
- `snackbar-color`: The default text colour of the snackbar (default `#00DDFF`)
- `snackbar-error`: The default text colour of the snackbar (default `#FF0400`)
- `snackbar-warning`: The default text colour of the snackbar (default `#FFFB00`)

```scss
// Override the snackbar colours
$snackbar-background: rgba(51, 51, 51, 0.9);
$snackbar-color: #00DDFF;
$snackbar-error: #FF0400;
$snackbar-warning: #FFFB00;

// Import the snacker stylesheet
@import '~snacker/src/scss/snackbar';
```

### Examples

Show a simple snackbar
```js
import Snackbar from 'snacker';
import 'snacker/dist/snackbar.css';

const snackbar = new Snackbar();

snackbar.show("I'm an info snackbar");
snackbar.show("I'm an error snackbar", { type: 'error', duration: 3000 });
snackbar.show("I'm a warning snackbar", { type: 'warning', duration: 3000 });
```

Show a snackbar with an action
```js
import Snackbar from 'snacker';
import 'snacker/dist/snackbar.css';

const snackbar = new Snackbar();

snackbar.show('New message', {
	type: 'info',
	duration: 3000,
	action: {
		text: 'open',
		handler: () => {
			alert('You clicked me!');
		},
	},
});
```

### Roadmap
- [ ] merge option defaults with given options to allow omitted properties to default.
- [ ] close snackbar when action is executed.
- [ ] more error handling
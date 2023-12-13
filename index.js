const root = document.getElementById('root');
const child1 = React.createElement('p',{},"I am a child");
const child2 = React.createElement('p',{},"I am a child");



const div = React.createElement('div',{className:'text'},[child1,child2]);
console.log(div)
const app = ReactDOM.createRoot(root);
app.render(div);

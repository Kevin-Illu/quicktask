import Launcher from './launcher/launcher.js';
const root = document.querySelector('#root');
try {
    const launcher = new Launcher(root);
    launcher.run();
}
catch {
    console.error('inicialization failed');
}

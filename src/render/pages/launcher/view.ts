import View from '../view.js'

class ViewLauncher extends View {
  constructor() {
    super('view-launcher')

    this.addLayout(`
      <header id="appbar">
  
      </header>
      <main id="content"></main>
      <footer id="footer"></footer>
    `)
  }
}

export default ViewLauncher

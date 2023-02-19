import View from '../view.js'

class ViewLauncher extends View {
  private title: string

  constructor(title: string) {
    super('view-launcher')
    this.title = title

    this.addLayout(`
      <header id="launcher__appbar">
          <div class="container">
          <div class="appbar__title">
            <p class="title">${this.title}</p>
          </div>
          <div id="appbar__current-action">action</div>
          <div id="appbar__system-buttons"></div>
        </div>
      </header>
      <main id="launcher__content">
        <div class="container">
        </div>
      </main>
      <footer id="launcher__footer">
        <div class="container">
        </div>
      </footer>
    `)

    this.setNewTitle('hola?')
    console.log(this.title)
  }

  setNewTitle(title: string) {
    this.title = title
  }
}

export default ViewLauncher

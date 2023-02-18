class DependencyContainer {
  private dependencies: Map<string, any> = new Map()

  register(name: string, dependency: any) {
    this.dependencies.set(name, dependency)
  }

  resolve<T>(name: string): T {
    const dependency = this.dependencies.get(name)
    if (!dependency) {
      throw new Error(`Dependency ${name} not registered`)
    }

    return dependency
  }
}

export default DependencyContainer

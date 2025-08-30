export function shared(): string {
  return 'shared';
}

export function SayHello(name?: string) {
  return `Hello${name ? ', ' + name : ''}!`
}

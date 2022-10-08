export function toggleMobileMenu({ menu }: { menu: HTMLElement; }): void {
  menu.classList.toggle("open");
}
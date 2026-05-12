export const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''))
  if (element) {
    const headerOffset = 80 // Adjust based on header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

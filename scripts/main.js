function copyToClipboard(element) {
    const url = window.location.href.split('#')[0];
    const section = element.closest('div');
    const fact = element.closest('li').querySelector('.fact').textContent;
    const text = `${fact}: ${url}#${section.id}`;
    navigator.clipboard.writeText(text);
}
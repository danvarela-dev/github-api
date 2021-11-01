export class Helpers {
  static fixUrl(url: string) {
    let end = url.indexOf('{');
    let fixedUrl = url.substring(0, end);
    return fixedUrl;
  }

  static getCountfromHeader(link: string | null): number {
    let links = link?.split(',');
    let countStr = '';
    links?.forEach((link, index) => {
      if (index > 0) {
        let start = link.lastIndexOf('page=');
        let end = link.lastIndexOf('>');
        let countStrAux = link.substring(start, end);
        countStr = countStrAux.substring(
          countStrAux.indexOf('=') + 1,
          countStrAux.length
        );
      } else {
        countStr = '0';
      }
    });
    return Number(countStr);
  }
}
